# Bili-archive

[https://mdark.org](https://mdark.org)

这是一个文档仓库，利用 [fumadocs](https://github.com/fuma-nama/fumadocs) 将本 orgnization 下的不同文档 repo 集成为一个文档站点。

详见 [https://github.com/mdark-org](https://github.com/mdark-org)

## Deploy to Cloud Run

这个仓库已经提供 `cloudbuild.yaml`，流程是：

1. Cloud Build 执行 `pnpm build`（会生成 `fuma/.next/standalone`）
2. 复用根目录 `Dockerfile` 打包镜像
3. 部署到 Cloud Run

### 1) 准备 Secret Manager

以下变量用于 build/runtime，建议全部放入 Secret Manager：

- `GITHUB_TOKEN`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_ORAMA_API_KEY`
- `ORAMA_PRIVATE_API_KEY`
- `UPLOADTHING_TOKEN`
- `BETTER_AUTH_SECRET`
- `DATABASE_URL`
- `S3_ACCESS_KEY_ID`
- `S3_SECRET_ACCESS_KEY`

示例（已存在则会报错，首次执行用）：

```bash
printf '%s' "$GITHUB_TOKEN" | gcloud secrets create github-token --data-file=-
```

更新 secret 新版本：

```bash
printf '%s' "$GITHUB_TOKEN" | gcloud secrets versions add github-token --data-file=-
```

### 2) 准备 Artifact Registry

```bash
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com secretmanager.googleapis.com
gcloud artifacts repositories create cloud-run --repository-format=docker --location=asia-east1
```

如果 `cloud-run` 仓库已存在，第二条命令可忽略错误。

### 3) 提交构建并部署

```bash
gcloud builds submit \
  --config cloudbuild.yaml \
  --substitutions \
_SERVICE=bili-archive,\
_REGION=asia-east1,\
_REPOSITORY=cloud-run,\
_BASE_URL=https://your-domain.example,\
_GOOGLE_CLIENT_ID=your-google-client-id,\
_NEXT_PUBLIC_ORAMA_ENDPOINT=your-orama-endpoint,\
_ORAMA_INDEX_ID=your-orama-index-id,\
_S3_REGION=your-s3-region,\
_S3_FILE_URL=your-s3-file-url,\
_NEXT_PUBLIC_GAID=your-ga-id
```

部署完成后可用以下命令查看 URL：

```bash
gcloud run services describe bili-archive --region asia-east1 --format='value(status.url)'
```

## GitHub CI/CD to Cloud Run

已新增 workflow：`.github/workflows/cloud-run.yml`。

- 每天定时部署一次（UTC `02:00`，即北京时间 `10:00`）
- 支持手动触发（`workflow_dispatch`）
- GitHub 仅负责触发 GCP Cloud Build Trigger，不保存业务环境变量
- 保留 `vercel.yml`，但目前仅支持手动触发（`workflow_dispatch`）

### GitHub Secrets

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`

推荐使用 Workload Identity Federation，不要使用长期 service account key。

### GitHub Variables

- `GCP_BUILD_TRIGGER_ID`（当前为 `f9f15429-1884-4612-b176-1a2a1f655b9d`）

### GCP Trigger 中管理非敏感环境变量

以下非敏感变量放在 Cloud Build Trigger substitutions（不是 GitHub）：

- `_BASE_URL`
- `_GOOGLE_CLIENT_ID`
- `_NEXT_PUBLIC_ORAMA_ENDPOINT`
- `_ORAMA_INDEX_ID`
- `_S3_REGION`
- `_S3_FILE_URL`
- `_NEXT_PUBLIC_GAID`

更新示例：

```bash
gcloud builds triggers update manual f9f15429-1884-4612-b176-1a2a1f655b9d \
  --region=global \
  --update-substitutions=_BASE_URL=https://your-domain.example,_GOOGLE_CLIENT_ID=your-google-client-id,_NEXT_PUBLIC_ORAMA_ENDPOINT=your-orama-endpoint,_ORAMA_INDEX_ID=your-orama-index-id,_S3_REGION=your-s3-region,_S3_FILE_URL=your-s3-file-url,_NEXT_PUBLIC_GAID=your-ga-id
```

敏感项继续放在 Secret Manager（`github-token`、`database-url` 等），由 `cloudbuild.yaml` 引用。

## Cloudflare Global Proxy

建议将 Cloudflare 作为全局入口，Cloud Run 作为源站。

### 1) DNS 代理

在 Cloudflare DNS 中添加记录，并开启橙云（Proxied）：

- `CNAME` `@` -> `ghs.googlehosted.com`（推荐用于 Cloud Run 自定义域映射）
- 或 `CNAME` `@`/`www` -> `*.run.app`（也可用，需配合 CNAME flattening）

### 2) Cloud Run 域名映射

在 Cloud Run 绑定你的业务域名（如 `mdark.org`、`www.mdark.org`），并完成证书签发。

### 3) Cloudflare 安全与性能

- SSL/TLS 模式：`Full (strict)`
- 打开 HTTP/3、Brotli、Early Hints
- 按需添加缓存规则（HTML 可短缓存，静态资源长缓存）
- 打开 WAF/Rate Limiting（防刷、防突发）

这样用户会先到 Cloudflare 边缘节点，再回源到 Cloud Run，实现全球加速与防护。
