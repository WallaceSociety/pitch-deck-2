<script>
	import { calculatorStore } from '$lib/state/calculatorState';
	export let feature;

	function handleClick() {
		calculatorStore.toggleFeature(feature);
	}

	$: isSelected = $calculatorStore.selectedFeatures.has(feature);
</script>

<div class="feature-item" class:selected={isSelected} on:click={handleClick}>
	<div class="feature-content">
		<span class="feature-name">{feature.name}</span>
		<span class="feature-value">
			{#if feature.type === 'revenue'}
				+${feature.value.toLocaleString()}/event
			{:else if feature.type === 'time'}
				Saves {feature.value} hrs/week
			{:else if feature.type === 'marketing'}
				+{feature.value}%
			{/if}
		</span>
	</div>
	{#if isSelected}
		<svg class="checkmark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 6L9 17L4 12" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	{/if}
	<div class="tooltip" class:selected={isSelected}>{feature.tooltip}</div>
</div>

<style>
	.feature-item {
		position: relative;
		margin-bottom: 1rem;
		padding: 1.25rem;
		border-radius: 16px;
		transition: all 0.2s ease;
		background: #f8f8f8;
		cursor: pointer;
		border: 1px solid transparent;
	}

	.feature-item:hover {
		background: #f0f0f0;
		transform: translateY(-1px);
	}

	.feature-item.selected {
		background: #f1f8f1;
		border-color: #4CAF50;
	}

	.feature-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.feature-name {
		font-size: 1rem;
		color: #333;
		font-weight: 500;
	}

	.feature-value {
		color: #ff3e00;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.checkmark {
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		width: 24px;
		height: 24px;
		animation: scaleIn 0.2s ease;
	}

	.tooltip {
		font-size: 0.8rem;
		color: #666;
		margin-top: 0.75rem;
		line-height: 1.4;
		transition: color 0.2s ease;
	}

	.tooltip.selected {
		color: #4CAF50;
	}

	@keyframes scaleIn {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
</style>