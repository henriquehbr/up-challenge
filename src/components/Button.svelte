<script lang="typescript">
	import { createEventDispatcher } from 'svelte'

	export let icon = false

	const dispatch = createEventDispatcher()
</script>

<style lang="less">
	button {
		background-color: rgb(92, 113, 109);
		border: 3px solid white;
		color: white;
		margin: 8px;
		padding: 12px 48px;
		font-size: 18px;
		font-family: 'Pixel Font';
		box-shadow: 6px 6px 0 2px rgba(0, 0, 0, 0.5);
		outline: none;
		cursor: pointer;
		transition: opacity 0.3s, transform 0.3s;

		&.icon {
			position: absolute;
			font-size: 32px;
			padding: 0;
			width: 52px;
			height: 52px;
		}

		&:hover {
			transform: scale(1.1);
			opacity: 0.8;
		}

		&:active {
			transform: scale(1);
		}
	}
</style>

<button class:icon {...$$props} on:click={() => dispatch('click')}>
	<slot />
</button>
