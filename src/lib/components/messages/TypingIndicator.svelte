<script>
	export let sender;
	$: isSender = sender === 'Mike';
</script>

<div class="typing" class:sender={isSender}>
	<div class="dots">
		<span class="dot"></span>
		<span class="dot"></span>
		<span class="dot"></span>
	</div>
</div>

<style>
	.typing {
		align-self: flex-start;
		background: #e9e9eb;
		padding: 1rem;
		border-radius: 20px;
		margin-bottom: 2px;
		width: 4rem;
	}

	.typing.sender {
		align-self: flex-end;
		background: #007aff;
	}

	.dots {
		display: flex;
		gap: 0.3rem;
		justify-content: center;
	}

	.dot {
		width: 6px;
		height: 6px;
		background: #8e8e93;
		border-radius: 50%;
		animation: bounce 1.4s infinite ease-in-out;
	}

	.sender .dot {
		background: rgba(255, 255, 255, 0.7);
	}

	.dot:nth-child(1) { animation-delay: -0.32s; }
	.dot:nth-child(2) { animation-delay: -0.16s; }

	@keyframes bounce {
		0%, 80%, 100% { transform: translateY(0); }
		40% { transform: translateY(-6px); }
	}
</style>