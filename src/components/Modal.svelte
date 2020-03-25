<script lang="typescript">
	import Button from 'components/Button'

	export let title: string
	export let opened = false
</script>

<style lang="less">
	div {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0;
		animation: fadeIn 0.5s forwards;
	}

	section {
		position: fixed;
		padding: 12px 18px;
		font-family: 'Pixel Font';
		background-color: rgb(92, 113, 109);
		color: white;
		min-width: 280px;
		max-width: calc(100% - 32px);
		max-height: calc(100% - 32px);
		border: 3px solid white;
		box-shadow: 6px 6px 0 2px rgba(0, 0, 0, 0.5);
		overflow-y: auto;

		&:before {
			content: '';
			width: 100vw;
			height: 100vh;
			background-color: rgba(255, 255, 255, 0.5);
		}

		h2 {
			margin: 5px 0;
		}

		footer {
			display: flex;
			justify-content: flex-end;
		}
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	@keyframes expansideAppearance {
		
	}
</style>

{#if opened}
	<div />

	<!-- Firefox 75-76 still doesn't support <dialog> element -->
	<section>
		<h2>{title}</h2>
		<p>
			<slot />
		</p>
		<footer>
			<Button on:click={() => (opened = false)}>OK</Button>
		</footer>
	</section>
{/if}
