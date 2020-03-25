<script lang="typescript">
	import { onMount } from 'svelte'

	export let generationInterval = 1000

	const spawnObstacles = () => {
		const obstacleDestroyerObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => entry.isIntersecting && entry.target.remove())
		}, { rootMargin: '-100% 0px 0px 0px' })
		setInterval(async () => {
			const obstacle = document.createElement('div')
			const obstacleX = possibleXValues[rng(0, 3)]
			obstacle.classList.add('obstacle')
			obstacle.style.position = 'absolute'
			obstacle.style.transition = 'transform 3s linear'
			obstacle.style.transform = `translate(${obstacleX}, -${document.querySelector('.player')!.getBoundingClientRect().top}px)`
			obstacle.style.width = '30px'
			obstacle.style.height = '50px'
			obstacle.style.backgroundColor = 'blue'
			obstacle.style.zIndex = '1'
			road.appendChild(obstacle)
			obstacleDestroyerObserver.observe(obstacle)
			await new Promise(resolve => setTimeout(resolve, 10))
			obstacle.style.transform = `translate(${obstacleX}, 100vh)`
		}, generationInterval)
	}

	onMount(() => spawnObstacles())
</script>
