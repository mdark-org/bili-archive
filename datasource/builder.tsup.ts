import { defineConfig, Options } from 'tsup'
// ,
//
export default defineConfig((options) => {
  const commonOptions: Partial<Options> = {
    entry: [
      'src/builder/index.ts',
    ],
    platform: 'node',
    target: 'es6',
    splitting: false,
    bundle: true,
    sourcemap: true,
    clean: true,
    ...options,
  }
  return [
    // types
    {
      ...commonOptions,
      outDir: './dist/types/builder',
      format: ['esm'],
      dts: {
        only: true,
      },
      bundle: true,
      outExtension: (ctx) => {
        return {
          dts: '.d.ts'
        }
      }
    },
    {
      ...commonOptions,
      format: ['esm'],
      outDir: './dist/esm/builder',
      sourcemap: false,
      dts: false
    },
  ]
})