<script>
	export let onContinue;
</script>

<div class="volume-warning">
	<div class="warning-content">
		<h2>Please ensure your volume is turned up</h2>
		<p>This video contains important audio content</p>
		<button on:click={onContinue}>Continue</button>
	</div>
</div>

<style>
	.volume-warning {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
		color: white;
	}

	.warning-content {
		text-align: center;
		padding: 2rem;
	}

	h2 {
		font-size: 1.5rem;
		margin: 0 0 1rem 0;
	}

	p {
		margin: 0 0 1.5rem 0;
		opacity: 0.8;
	}

	button {
		background: #ff3e00;
		color: white;
		border: none;
		padding: 0.8rem 2rem;
		font-size: 1.1rem;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	button:hover {
		background: #e63600;
	}
</style>