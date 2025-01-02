<script>
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import ListReveal from './ListReveal.svelte';
	import CTAButton from './CTAButton.svelte';
	
	const visible = writable(false);

	onMount(() => {
		setTimeout(() => {
			$visible = true;
		}, 100);
	});
</script>

<div class="content" class:visible={$visible}>
	<h1>Every day your outdated website could be costing you</h1>
	<ListReveal />
	<CTAButton />
</div>

<style>
	.content {
		padding: 2rem;
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.5s ease, transform 0.5s ease;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}

	.content.visible {
		opacity: 1;
		transform: translateY(0);
	}

	h1 {
		font-family: 'Inter', sans-serif;
		font-size: 2rem;
		font-weight: 700;
		color: #1a1a1a;
		margin-bottom: 2rem;
		line-height: 1.2;
	}
</style>