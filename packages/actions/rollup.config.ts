// See: https://rollupjs.org/introduction/

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import multiEntry from '@rollup/plugin-multi-entry'

const getConfig = (name) => {
  return {
    input: `src/${name}/index.ts`,
    output: {
      esModule: true,
      file: `dist/${name}/index.mjs`,
      format: 'es',
      sourcemap: false
    },
    plugins: [typescript(), nodeResolve({ preferBuiltins: true }), commonjs(), multiEntry()]
  }
}

const name = process.env.NAME
console.log(name)

export default getConfig(name)
