// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  plugins: [
    resolve()
  ],
  output: {
    file: 'dist/bundle-rollup.js',
    treeshake: true,
    format: 'cjs',
    name: 'faTest',
    exports: 'named'
  }
};
