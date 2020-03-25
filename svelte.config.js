module.exports = {
	preprocess: require('svelte-preprocess')({
		typescript: {
			transpileOnly: true
		}
	})
}
