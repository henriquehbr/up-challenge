<style lang="less">
	.grass {
		display: flex;
		justify-content: center;
		background-color: green;
		width: 100%;
		height: 100%;
		overflow: hidden;

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

<div class="grass">
	<div class="road">
		<slot />
	</div>
</div>
