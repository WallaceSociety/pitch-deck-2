<script>
	import VideoScreen from '$lib/components/VideoScreen.svelte';
	import ContentScreen from '$lib/components/ContentScreen.svelte';
	import MessageScreen from '$lib/components/MessageScreen.svelte';
	import ROICalculator from '$lib/components/calculator/ROICalculator.svelte';
	import { showSecondScreen, showMessageScreen, showCalculator } from '$lib/state/screenState';
	import { onMount } from 'svelte';
	import { initializeAudio } from '$lib/utils/audioUtils';

	function handleVideoEnded(event) {
		$showSecondScreen = true;
	}

	onMount(() => {
		initializeAudio();
	});
</script>

<div class="container">
	{#if !$showSecondScreen}
		<VideoScreen on:ended={handleVideoEnded} />
	{:else if !$showMessageScreen}
		<ContentScreen />
	{:else if !$showCalculator}
		<MessageScreen />
	{:else}
		<ROICalculator />
	{/if}
</div>

<style>
	.container {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		background: white;
	}
</style>

