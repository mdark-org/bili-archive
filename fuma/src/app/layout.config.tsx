import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { config } from '../../config'
import { LinkItemType } from "fumadocs-ui/layouts/shared";
import { AlbumIcon } from "lucide-react";
import TelegramIcon from "@/components/icons/telegram.tsx";


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
  },{
    icon: <TelegramIcon />,
    type: 'icon',
    text: 'Telegram',
    url: 'https://t.me/mdark_org',
    active: 'url',
    on: 'nav'
  },
  // {
  //   icon: <AlbumIcon />,
  //   text: 'Changelog',
  //   url: '/changelog',
  //   active: 'nested-url',
  // },
];