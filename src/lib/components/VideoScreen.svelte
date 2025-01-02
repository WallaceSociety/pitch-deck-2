<script>
	import VideoPlayer from './VideoPlayer.svelte';
	
	export let onVideoEnd;
</script>

<div class="video-container">
	<VideoPlayer onEnded={onVideoEnd} />
</div>

<style>
	.video-container {
		height: 100vh;
		width: 100%;
		background: black;
	}
</style>