import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { config } from '../../config'


export const baseOptions: BaseLayoutProps = {
  ...config.fuma.baseLayout,
  githubUrl: config.fuma.baseLayout.githubUrl ??
              config?.github ? `https://github.com/${config.github?.owner}/${config.github?.repo}`: undefined
};
