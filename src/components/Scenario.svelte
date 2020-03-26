<script lang="typescript">
	export let paused = false
</script>

<style lang="less">
	.grass {
		display: flex;
		justify-content: center;
		background-color: green;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;

		&.paused {
			&:before, &:after, .road:before, .road:after {
				animation: none !important;
			}
		}

		&:before,
		&:after {
			content: '';
			width: 15px;
			height: 100% + 20px;
			background: repeating-linear-gradient(to bottom, red, red 40px, white 40px, white 80px);
			animation: scenario-slide-down 0.5s linear infinite;
		}

		.road {
			position: relative;
			display: flex;
			justify-content: space-evenly;
			width: 36%;
			height: 100%;
			background-color: grey;

			&:before,
			&:after {
				content: '';
				width: 10px;
				height: 100% + 10px;
				background: repeating-linear-gradient(to bottom, white, white 40px, transparent 40px, transparent 80px);
				animation: scenario-slide-down 0.5s linear infinite;
			}
		}
	}

	/* refactor this */
	@keyframes scenario-slide-down {
		from {
			transform: translateY(-80px);
		}

		to {
			transform: translateY(0);
		}
	}
</style>

<div class:paused class="grass">
	<div class="road">
		<slot />
	</div>
</div>
