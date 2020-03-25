<script lang="typescript">
	import Menu from 'components/Menu'
</script>

<style lang="less" global>
	@font-face {
		font-family: 'Pixel Font';
		src: url('../pixel-font.ttf') format('truetype');
	}

	* {
		box-sizing: border-box;
	}

	body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
	}
</style>

<Menu />
