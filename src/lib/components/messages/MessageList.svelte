<script>
	import { onMount, afterUpdate } from 'svelte';
	import MessageBubble from './MessageBubble.svelte';
	import TypingIndicator from './TypingIndicator.svelte';
	import ImpactSummary from './ImpactSummary.svelte';
	import CTAButton from './CTAButton.svelte';
	import { messages } from '$lib/data/messages';
	import { currentMessageIndex } from '$lib/state/messageState';
	import { shouldShowTyping, scrollToBottom } from '$lib/utils/messageUtils';
	
	let container;
	$: showTyping = shouldShowTyping(messages[$currentMessageIndex]);

	afterUpdate(() => {
		scrollToBottom(container);
	});
</script>

<div class="messages" bind:this={container}>
	{#each messages.slice(0, $currentMessageIndex) as message}
		<MessageBubble {message} />
	{/each}
	
	{#if showTyping}
		<TypingIndicator sender={messages[$currentMessageIndex].sender} />
	{/if}

	<ImpactSummary />
	<CTAButton />
</div>

<style>
	.messages {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.messages::-webkit-scrollbar {
		width: 6px;
	}

	.messages::-webkit-scrollbar-track {
		background: transparent;
	}

	.messages::-webkit-scrollbar-thumb {
		background: #ddd;
		border-radius: 3px;
	}
</style>