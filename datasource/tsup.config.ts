import { defineConfig, Options } from 'tsup'
// bundle: true,
//
export default defineConfig((options) => {
  const commonOptions: Partial<Options> = {
    entry: [
      'src/**/*.[jt]s',
      'src/**/*.[jt]sx',
      '!./src/**/*.d.ts',
      '!./src/**/*.test.[jt]s',
      '!./src/**/*.spec.[jt]s',
      '!./src/**/*.test.[jt]sx',
      '!./src/**/*.spec.[jt]sx'
    ],
    platform: 'node',
    target: 'es6',
    splitting: false,
    bundle: false,
    sourcemap: true,
    clean: true,
    ...options,
  }
  return [
    // types
    {
      ...commonOptions,
      outDir: './dist/types/',
      format: ['esm'],
      dts: {
        only: true,
      },
      outExtension: (ctx) => {
        return {
          dts: '.d.ts'
        }
      }
    },
    {
      ...commonOptions,
      format: ['esm'],
      outDir: './dist/esm/',
      bundle: false,
      dts: false
    }
  ]
})