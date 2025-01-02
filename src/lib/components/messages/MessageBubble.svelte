<script>
	export let message;
	$: isSender = message.sender === 'Mike';
</script>

<div class="message" class:sender={isSender}>
	<div class="bubble" class:sender={isSender}>
		{message.text}
		{#if message.emoji}
			<span class="emoji">{message.emoji}</span>
		{/if}
	</div>
	<div class="time">{message.time}</div>
</div>

<style>
	.message {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 80%;
		animation: fadeIn 0.3s ease;
	}

	.message.sender {
		align-self: flex-end;
		align-items: flex-end;
	}

	.bubble {
		background: #e9e9eb;
		padding: 0.8rem 1rem;
		border-radius: 20px;
		font-size: 1rem;
		color: #000;
		margin-bottom: 2px;
		border-bottom-left-radius: 4px;
	}

	.bubble.sender {
		background: #007aff;
		color: white;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 4px;
	}

	.time {
		font-size: 0.75rem;
		color: #8e8e93;
		margin-top: 2px;
	}

	.emoji {
		font-size: 1.2em;
		margin-left: 0.3em;
		vertical-align: middle;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>