import { writable } from 'svelte/store';
import { messages } from '$lib/data/messages';

export const currentMessageIndex = writable(0);
export const currentMessages = writable([]);

export function resetMessages() {
	currentMessageIndex.set(0);
	currentMessages.set([]);
}