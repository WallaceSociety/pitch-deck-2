<script>
	import '../app.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: 100vw;
		overflow-x: hidden;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}

	@media (min-width: 769px) {
		.app {
			display: flex;
			justify-content: center;
			align-items: center;
			background: #1a1a1a;
		}

		main {
			width: 390px;
			height: 100vh;
			background: white;
		}
	}
</style>