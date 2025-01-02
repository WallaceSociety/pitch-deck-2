<script>
    import { writable } from 'svelte/store';
    import { onMount } from 'svelte';
    import VolumeWarning from './video/VolumeWarning.svelte';
    import { setupVideoEventListeners, handleVideoError } from '$lib/utils/videoPlayerUtils';

    export let onEnded;
    
    const videoLoaded = writable(false);
    const hasError = writable(false);
    const showVolumeWarning = writable(true);
    let videoElement;
    let isPlaying = false;
    let hasTriggeredEnd = false;
    
    function handleLoadedData() {
        $videoLoaded = true;
    }

    function handleError(e) {
        $hasError = true;
        handleVideoError(e);
        onEnded();
    }

    function handleVideoComplete() {
        if (!hasTriggeredEnd) {
            hasTriggeredEnd = true;
            isPlaying = false;
            onEnded();
        }
    }

    async function startVideo() {
        try {
            $showVolumeWarning = false;
            if (videoElement) {
                await videoElement.play();
                isPlaying = true;
            }
        } catch (error) {
            handleError(error);
        }
    }

    onMount(() => {
        if (videoElement) {
            videoElement.load();
            const cleanup = setupVideoEventListeners(videoElement, handleVideoComplete);

            const timeout = setTimeout(() => {
                if (!$videoLoaded) {
                    handleError(new Error('Video load timeout'));
                }
            }, 5000);

            return () => {
                clearTimeout(timeout);
                cleanup();
            };
        }
    });
</script>

<div class="video-container" class:loaded={$videoLoaded}>
    {#if $showVolumeWarning}
        <VolumeWarning onContinue={startVideo} />
    {/if}
    
    {#if !$hasError}
        <video
            bind:this={videoElement}
            playsinline
            on:loadeddata={handleLoadedData}
            on:error={handleError}
        >
            <source src="/videos/intro.mp4" type="video/mp4">
            <source src="/videos/intro.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
    {/if}
</div>

<style>
    .video-container {
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: opacity 0.3s ease;
        background: black;
        position: relative;
    }
    
    .loaded {
        opacity: 1;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>