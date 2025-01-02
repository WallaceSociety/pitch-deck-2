<script>
	import { fade } from 'svelte/transition';
	import { messages } from '$lib/data/messages';
	import { currentMessageIndex } from '$lib/state/messageState';

	$: showSummary = $currentMessageIndex === messages.length;

	const impacts = [
		{ label: 'Lost Sales', amount: 7500 },
		{ label: 'Lost Sponsorship', amount: 25000 },
		{ label: 'Staff Time Wasted', text: '6+ hours' },
		{ label: 'Total Impact', amount: 32500, isTotal: true }
	];
</script>

{#if showSummary}
	<div class="impact-summary" transition:fade={{ duration: 300 }}>
		<h2>Financial Impact Summary</h2>
		<div class="impacts">
			{#each impacts as impact}
				<div class="impact-item" class:total={impact.isTotal}>
					<span class="label">{impact.label}</span>
					<span class="amount">
						{#if impact.amount}
							${impact.amount.toLocaleString()}
						{:else}
							{impact.text}
						{/if}
						{#if impact.isTotal}+{/if}
					</span>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.impact-summary {
		margin: 2rem 1rem;
		padding: 1.5rem;
		background: #f8f8f8;
		border-radius: 12px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	h2 {
		font-size: 1.2rem;
		color: #333;
		margin: 0 0 1rem 0;
		text-align: center;
	}

	.impacts {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.impact-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
		border-bottom: 1px solid #eee;
	}

	.impact-item:last-child {
		border-bottom: none;
	}

	.label {
		color: #666;
		font-size: 0.95rem;
	}

	.amount {
		font-weight: 600;
		color: #ff3e00;
		font-size: 1.1rem;
	}

	.total {
		margin-top: 0.5rem;
		padding-top: 1rem;
		border-top: 2px solid #eee;
	}

	.total .label {
		font-weight: 600;
		color: #333;
	}

	.total .amount {
		font-size: 1.3rem;
	}
</style>