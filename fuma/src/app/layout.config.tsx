import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { config } from '../../config'
import { LinkItemType } from "fumadocs-ui/layouts/shared";
import { AlbumIcon } from "lucide-react";


export const baseOptions: BaseLayoutProps = {
  ...config.fuma.baseLayout,
  githubUrl: config.fuma.baseLayout.githubUrl ?? `https://github.com/${config.github.owner}/${config.github.repo}`
};


export const linkItems: LinkItemType[] = [
  {
    icon: <AlbumIcon />,
    text: '文稿',
    url: '/docs',
    active: 'url',
  },
  // {
  //   icon: <AlbumIcon />,
  //   text: 'Changelog',
  //   url: '/changelog',
  //   active: 'nested-url',
  // },
];