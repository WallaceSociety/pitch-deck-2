<script>
	import { showMessageScreen } from '$lib/state/screenState';
	
	function handleClick() {
		$showMessageScreen = true;
	}
</script>

<button class="cta" on:click={handleClick}>See What You're Missing</button>

<style>
	.cta {
		background: #ff3e00;
		color: white;
		border: none;
		padding: 1rem 2rem;
		font-family: 'Inter', sans-serif;
		font-size: 1.1rem;
		font-weight: 600;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.3s ease;
		margin-top: auto;
	}

	.cta:hover {
		background: #e63600;
	}
</style>