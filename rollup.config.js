import path from 'path'

const production = !process.env.ROLLUP_WATCH

export default {
	input: './src/index.ts',
	output: {
		format: 'iife',
		name: 'app',
		file: 'dist/build/bundle.js'
	},
	plugins: [
		require('rollup-plugin-svelte')({
			dev: !production,
			css: css => css.write('dist/build/bundle.css', false),
			preprocess: require('svelte-preprocess')({
				typescript: {
					transpileOnly: true
				}
			})
		}),
		require('@rollup/plugin-node-resolve')({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/'),
			customResolveOptions: {
				moduleDirectory: ['src', 'node_modules'],
				extensions: ['.svelte', '/index.svelte', '.mjs', '.js', '.json']
			}
		}),
		require('@rollup/plugin-alias')({
			entries: {
				components: path.resolve(__dirname, 'src', 'components'),
				assets: path.resolve(__dirname, 'dist', 'assets')
			}
		}),
		require('@rollup/plugin-typescript')(),
		require('@rollup/plugin-commonjs')(),
		//require('rollup-plugin-bundle-size')(),
		!production && require('rollup-plugin-serve')('dist'),
		!production && require('rollup-plugin-livereload')('dist'),
		require('rollup-plugin-terser').terser()
	]
}
