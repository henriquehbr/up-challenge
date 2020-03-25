<script lang="typescript">
	import Game from 'components/Game'
	import Button from 'components/Button'
	import Modal from 'components/Modal'

	let menu: HTMLElement
	let opened = false
	let playable = false

	const startGame = () => {
		playable = true
		menu.style.transform = 'translateY(-100%)'
	}
</script>

<style lang="less">
	main {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		backdrop-filter: blur(0);
		transition: transform 1.5s;
		animation: blurIn 1s forwards;

		h1 {
			font-family: 'VT323';
			font-size: 72px;
			letter-spacing: 3px;
			color: white;
			text-shadow: 8px 8px 0 black;
			transform: translateY(-100vh);
			user-select: none;
			animation: slideInDown 1s forwards;
		}

		> :global(button) {
			&:nth-of-type(1), &:nth-of-type(2) {
				font-size: 32px;
			}

			&:nth-of-type(1) {
				animation: appearFromLeft 1s;
			}

			&:nth-of-type(2) {
				animation: appearFromRight 1s;
			}
		}
	}

	@keyframes slideInDown {
		to {
			transform: translateY(0);
		}
	}

	@keyframes blurIn {
		to {
			backdrop-filter: blur(10px);
		}
	}

	@keyframes appearFromLeft {
		from {
			opacity: 0;
			transform: translateX(-300px);
		}

		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes appearFromRight {
		from {
			opacity: 0;
			transform: translateX(300px);
		}

		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>

<Game {playable} />

<main bind:this={menu}>
	<h1>UpChallenge</h1>
	<Button on:click={startGame}>Jogar</Button>
	<Button on:click={() => (opened = true)}>Sobre</Button>
	<Modal bind:opened title="Sobre">
		Desafio técnico para desenvolvedor Front-End na Upnid
	</Modal>
</main>
