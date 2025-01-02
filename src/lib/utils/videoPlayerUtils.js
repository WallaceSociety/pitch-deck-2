export function checkVideoComplete(video) {
    // More precise completion check
    if (!video) return false;
    
    // Check if we're at least 98% through the video
    // This helps with slight timing differences
    const completionThreshold = 0.98;
    const isNearEnd = video.currentTime >= video.duration * completionThreshold;
    
    // Also verify the video has actually loaded and has a duration
    const hasValidDuration = video.duration && video.duration > 0;
    
    return hasValidDuration && isNearEnd;
}

export function handleVideoError(error) {
    console.error('Video playback error:', error);
    return new Error('Failed to play video');
}

export function setupVideoEventListeners(video, onComplete) {
    if (!video) return () => {};
    
    const handleTimeUpdate = () => {
        if (checkVideoComplete(video)) {
            onComplete();
        }
    };
    
    const handleEnded = () => {
        if (checkVideoComplete(video)) {
            onComplete();
        }
    };
    
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    
    // Return cleanup function
    return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
    };
}