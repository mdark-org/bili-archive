import { defineConfig } from 'tsdown';

export default defineConfig((options) => ({
  entry: [
    "src/**/*.[jt]s",
    "src/**/*.[jt]sx",
    "!./src/**/*.d.ts",
    "!./src/**/*.test.[jt]s",
    "!./src/**/*.spec.[jt]s",
    "!./src/**/*.test.[jt]sx",
    "!./src/**/*.spec.[jt]sx",
  ],
  platform: 'node',
  target: "es6",
  format: ['module'],
  outDir: "./dist/",
  dts: true,
  unbundle: true,
  sourcemap: true,
  shims: true,
  clean: true,
  ...options,
}));