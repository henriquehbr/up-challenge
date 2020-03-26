<script lang="typescript">
	import Button from 'components/Button'
	import Scenario from 'components/Scenario'
	import Player from 'components/Player'
	import Modal from 'components/Modal'

	export let playable = false

	let paused: boolean
	let road: number
</script>

<style lang="less">
	:global(button[data-pause]) {
		left: 16px;
		top: 16px;
	}

	:global(button[data-left], button[data-right]) {
		bottom: 16px;
		display: none;

		@media screen and (max-width: 768px) {
			display: block;
		}
	}

	:global(button[data-left]) {
		left: 16px;
	}

	:global(button[data-right]) {
		right: 16px;
	}
</style>

<svelte:window on:keydown={({ key }) => key === 'Escape' && !paused && (paused = true)} />

{#if playable}
	<Modal bind:opened={paused} title="Pausado">Clique em "OK" para continuar</Modal>
	<Button on:click={() => paused = true} data-pause icon>⏸</Button>
	<Button on:click={() => road > 0 && road--} data-left icon>⬅️</Button>
	<Button on:click={() => road < 2 && road++} data-right icon>➡️</Button>
	<Scenario {paused}>
		<Player bind:road />
	</Scenario>
{:else}
	<Scenario />
{/if}
