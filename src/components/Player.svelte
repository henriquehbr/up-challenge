<script lang="typescript">
	export let road = 1

	let player: HTMLElement
	let playerMovingHorizontally: boolean
	let playerMovingVertically: boolean
	let playerVerticalPosition = [1, 'vw']
	let roadsHorizontalCoordinates = ['-12.5vw', '0', '12.5vw']

	const sleep = async (ms: number, callback: Function) => await new Promise(resolve => setTimeout(callback, ms))

	const handleControls = async ({ key }: KeyboardEvent) => {
		if (!playerMovingHorizontally) {
			;(key === 'ArrowUp' && ((playerVerticalPosition[0] as number) -= 5)) ||
				(key === 'ArrowDown' && ((playerVerticalPosition[0] as number) += 5))
		}
		if (!playerMovingHorizontally) {
			playerMovingHorizontally = true
			;(key === 'ArrowLeft' && road > 0 && road--) || (key === 'ArrowRight' && road < 2 && road++)
			player!.classList.add('turning')
			sleep(250, () => (playerMovingHorizontally = false))
		}
	}
</script>

<style lang="less">
	.car {
		position: absolute;
		display: flex;
		flex-direction: column;
		transform: translate(var(--car-road), var(--car-y));
		bottom: 10vh;
		width: 30px;
		height: 50px;
		padding: 4px;
		background-color: red;
		transition: transform 0.25s ease-in-out;
		border-bottom: 2px solid #323232;
		border-radius: 6px;
		z-index: 1;

		.lower-roof {
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			width: 100%;
			height: 25px;
			background-color: black;
			margin-top: auto;
			border-radius: 4px;
			overflow: hidden;

			&:before,
			&:after {
				content: '';
				margin: auto;
				background-color: darkred;
				height: calc(100% + 6px);
				width: 3px;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				position: absolute;
			}

			&:before {
				transform: rotateZ(-45deg);
			}

			&:after {
				transform: rotateZ(45deg);
			}
		}

		.upper-roof {
			position: absolute;
			width: 12px;
			height: 12px;
			background-color: red;
			z-index: 2;
			border-radius: 4px;
		}

		.tire {
			position: absolute;
			background: linear-gradient(
				to bottom,
				rgba(14, 14, 14, 1) 1%,
				rgba(50, 50, 50, 1) 50%,
				rgba(14, 14, 14, 1) 99%
			);
			border-radius: 24px;
			width: 30%;
			height: 35%;
			z-index: -5;

			&:nth-of-type(1) {
				left: -15%;
				clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
			}

			&:nth-of-type(2) {
				right: -15%;
				clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
			}

			&:nth-of-type(3) {
				bottom: 5%;
				left: -15%;
				clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
			}

			&:nth-of-type(4) {
				bottom: 5%;
				right: -15%;
				clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
			}
		}
	}
</style>

<svelte:window on:keydown={handleControls} />

<div
	class="car"
	bind:this={player}
	style="--car-road: {roadsHorizontalCoordinates[road]}; --car-y: {playerVerticalPosition.join('')}">
	<div class="tire" />
	<div class="tire" />
	<div class="tire" />
	<div class="tire" />
	<div class="lower-roof">
		<div class="upper-roof" />
	</div>
</div>
