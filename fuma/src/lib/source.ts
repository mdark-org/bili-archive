import { loader } from 'fumadocs-core/source'
import { createMDXSource } from '@fumadocs/content-collections'
import { allDocs, allMetas } from 'content-collections'
import { icons } from 'lucide-react';
import {createElement} from "react";

export const source = loader({
  baseUrl: "/",
  source: createMDXSource(allDocs, allMetas),
  icon(icon) {
    if (!icon) return
    if (icon in icons) return createElement(icons[icon as keyof typeof icons])
    return createElement('img', {src: icon, className: 'w-5 h-5'})
  },
})