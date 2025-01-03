<script>
	import VideoPlayer from './VideoPlayer.svelte';
</script>

<div class="video-container">
	<VideoPlayer on:ended />
</div>

<style>
	.video-container {
		height: 100vh;
		width: 100%;
		background: black;
	}
</style>

