<script lang="typescript" context="module">
	import { writable } from 'svelte/store'

	export const GlobalStore = writable({
		playerMovingHorizontally: false,
		playerMovingVertically: false,
		playerRoadIndex: 1,
		playerVerticalPosition: [1, 'vw'],
		roadsHorizontalCoordinates: ['-12.5vw', '0', '12.5vw']
	})
</script>

<script lang="typescript">
	import Button from 'components/Button'
	import Scenario from 'components/Scenario'
	import Player from 'components/Player'

	export let playable = false
</script>

{#if playable}
	<Button icon>⏸</Button>
	<Scenario>
		<Player />
	</Scenario>
{:else}
	<Scenario />
{/if}
