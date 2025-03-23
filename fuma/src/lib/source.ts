import { loader } from 'fumadocs-core/source'
import { createMDXSource } from '@fumadocs/content-collections'
import { allDocs, allMetas } from 'content-collections'

export const source = loader({ baseUrl: "/", source: createMDXSource(allDocs, allMetas) })