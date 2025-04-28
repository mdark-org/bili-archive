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
      outDir: './dist/builder/types',
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
      outDir: './dist/builder/esm',
      sourcemap: false,
      dts: false
    },
    {
      ...commonOptions,
      format: ['cjs'],
      outDir: './dist/builder/cjs',
    },
  ]
})