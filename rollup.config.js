import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'rollupThree'
  },
  watch: {
    include: 'src/**'
  },
  plugins: [
    resolve({
      jsnext: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(), // CommonJSモジュールをES6に変換
    babel(), // ES5に変換
    serve(),
  ]
}
