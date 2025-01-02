let messageSound;

export function initializeAudio() {
	messageSound = new Audio('/sounds/message.mp3');
	messageSound.volume = 0.5;
}

export function playMessageSound() {
	if (messageSound) {
		messageSound.currentTime = 0;
		messageSound.play().catch(() => {
			// Ignore autoplay errors
		});
	}
}