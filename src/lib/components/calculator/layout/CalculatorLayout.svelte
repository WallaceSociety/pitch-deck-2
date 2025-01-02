<script>
	import Header from './Header.svelte';
	import TotalBar from '../TotalBar.svelte';
	import { calculatorStore } from '$lib/state/calculatorState';
</script>

<div class="calculator">
	<Header />
	<div class="content">
		<slot />
	</div>
	<TotalBar totals={$calculatorStore.totals} />
</div>

<style>
	.calculator {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: white;
	}

	.content {
		flex: 1;
		min-height: 0;
		background: #f5f5f5;
		display: flex;
		flex-direction: column;
	}
</style>