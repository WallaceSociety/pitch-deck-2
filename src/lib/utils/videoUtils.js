export function checkVideoSupport() {
	const video = document.createElement('video');
	return {
		mp4: video.canPlayType('video/mp4'),
		webm: video.canPlayType('video/webm')
	};
}

export function getOptimalVideoSource() {
	const support = checkVideoSupport();
	if (support.webm) return '/videos/intro.webm';
	return '/videos/intro.mp4';
}