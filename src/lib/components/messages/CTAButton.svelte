<script>
	import { fade } from 'svelte/transition';
	import { messages } from '$lib/data/messages';
	import { currentMessageIndex } from '$lib/state/messageState';
	import { showCalculator } from '$lib/state/screenState';

	$: showButton = $currentMessageIndex === messages.length;

	function handleClick() {
		$showCalculator = true;
	}
</script>

{#if showButton}
	<div class="cta-container" transition:fade={{ duration: 300 }}>
		<button class="cta" on:click={handleClick}>Stop the Bleeding</button>
	</div>
{/if}

<style>
	.cta-container {
		padding: 2rem 1rem;
		display: flex;
		justify-content: center;
	}

	.cta {
		background: #ff3e00;
		color: white;
		border: none;
		padding: 1rem 2rem;
		font-size: 1.1rem;
		font-weight: 600;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.3s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.cta:hover {
		background: #e63600;
	}
</style>