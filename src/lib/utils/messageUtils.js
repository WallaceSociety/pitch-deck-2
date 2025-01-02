export function scrollToBottom(container) {
	if (container) {
		// Always scroll to bottom when new messages arrive
		setTimeout(() => {
			container.scrollTo({
				top: container.scrollHeight,
				behavior: 'smooth'
			});
		}, 100);
	}
}

export function getNextMessage(messages, currentIndex) {
	return currentIndex < messages.length ? messages[currentIndex] : null;
}

export function shouldShowTyping(message) {
	return message && message.showTyping;
}