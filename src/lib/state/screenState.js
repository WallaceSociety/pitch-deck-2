import { writable } from 'svelte/store';

export const showSecondScreen = writable(false);
export const showMessageScreen = writable(false);
export const showCalculator = writable(false);