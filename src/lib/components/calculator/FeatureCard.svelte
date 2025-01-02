<script>
	import FeatureItem from './FeatureItem.svelte';
	export let category;
</script>

<div class="feature-card">
	<div class="card-header">
		<h2>{category.title}</h2>
	</div>
	<div class="features-list">
		{#each category.features as feature}
			<FeatureItem {feature} />
		{/each}
	</div>
</div>

<style>
	.feature-card {
		flex: 0 0 calc(100% - 2rem);
		scroll-snap-align: start;
		background: white;
		border-radius: 24px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		height: 100%;
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
		border: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(12px);
	}

	.card-header {
		background: linear-gradient(135deg, #ff3e00, #ff5722);
		padding: 2rem;
		color: white;
		flex-shrink: 0;
	}

	h2 {
		font-size: 1.5rem;
		margin: 0;
		font-weight: 700;
	}

	.features-list {
		flex: 1;
		overflow-y: auto;
		padding: 1.5rem;
		min-height: 0; /* Critical for nested flex scroll */
	}

	.features-list::-webkit-scrollbar {
		width: 6px;
	}

	.features-list::-webkit-scrollbar-track {
		background: transparent;
	}

	.features-list::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.1);
		border-radius: 3px;
	}
</style>