<script>
	import { onMount } from 'svelte';
	import MessageList from './messages/MessageList.svelte';
	import { messages } from '$lib/data/messages';
	import { currentMessageIndex } from '$lib/state/messageState';
	import { playMessageSound } from '$lib/utils/audioUtils';
	
	function handleNameDoubleClick() {
		$currentMessageIndex = messages.length;
	}

	onMount(() => {
		const messageInterval = setInterval(() => {
			if ($currentMessageIndex < messages.length) {
				if (messages[$currentMessageIndex].showTyping) {
					setTimeout(() => {
						$currentMessageIndex++;
						playMessageSound();
					}, 2000);
				} else {
					$currentMessageIndex++;
					playMessageSound();
				}
			} else {
				clearInterval(messageInterval);
			}
		}, 2500);

		return () => clearInterval(messageInterval);
	});
</script>

<div class="message-screen">
	<div class="header">
		<div class="status-bar">9:42 AM</div>
		<div class="chat-header">
			<button 
				class="name-button" 
				on:dblclick={handleNameDoubleClick}
				aria-label="Skip conversation"
			>
				Mike
			</button>
		</div>
	</div>
	
	<MessageList />
</div>

<style>
	.message-screen {
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #fff;
	}

	.header {
		background: #f2f2f2;
		padding: 10px;
		border-bottom: 1px solid #ddd;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.status-bar {
		text-align: center;
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 5px;
	}

	.chat-header {
		text-align: center;
		font-weight: 600;
		font-size: 1.1rem;
	}

	.name-button {
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		font-weight: 600;
		cursor: pointer;
		color: inherit;
	}

	.name-button:hover {
		color: #ff3e00;
	}
</style>