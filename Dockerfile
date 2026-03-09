# 使用轻量级的 Node Alpine 镜像
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"

COPY fuma/.next/standalone ./

COPY fuma/public ./fuma/public
COPY fuma/.next/static ./fuma/.next/static

EXPOSE 3000

CMD ["node", "fuma/server.js"]