<script>
	import FeatureCard from './FeatureCard.svelte';
	import { categories } from '$lib/data/calculatorData';
	
	let container;
	let activeCard = 0;

	function handleScroll() {
		const cards = container.querySelectorAll('.feature-card');
		const containerLeft = container.scrollLeft;
		const cardWidth = cards[0].offsetWidth + 16; // Including gap
		activeCard = Math.round(containerLeft / cardWidth);
	}
</script>

<div class="cards-wrapper">
	<div class="cards-container" bind:this={container} on:scroll={handleScroll}>
		{#each categories as category}
			<FeatureCard {category} />
		{/each}
	</div>
</div>

<style>
	.cards-wrapper {
		flex: 1;
		min-height: 0;
		position: relative;
	}

	.cards-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		padding: 1.5rem;
		gap: 1rem;
	}

	.cards-container::-webkit-scrollbar {
		height: 0;
		width: 0;
		display: none;
	}
</style>