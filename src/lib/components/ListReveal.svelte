<script>
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { listItems } from '$lib/data/content';
	
	const visibleItems = writable([]);

	onMount(() => {
		let index = 0;
		const interval = setInterval(() => {
			if (index < listItems.length) {
				$visibleItems = [...$visibleItems, listItems[index]];
				index++;
			} else {
				clearInterval(interval);
			}
		}, 1500); // Increased interval from 1000ms to 1500ms

		return () => clearInterval(interval);
	});
</script>

<ul>
	{#each $visibleItems as item}
		<li class="reveal">{item}</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem 0;
	}

	li {
		font-family: 'Inter', sans-serif;
		font-size: 1.1rem;
		color: #4a4a4a;
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
		position: relative;
		opacity: 0;
		transform: translateX(-20px);
		position: relative;
	}

	li::before {
		content: "•";
		position: absolute;
		left: 0;
		color: #ff3e00;
	}

	.reveal {
		animation: wipeIn 1s ease forwards;
	}

	@keyframes wipeIn {
		0% {
			opacity: 0;
			transform: translateX(-20px);
			clip-path: inset(0 100% 0 0);
		}
		50% {
			opacity: 1;
			transform: translateX(0);
			clip-path: inset(0 50% 0 0);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
			clip-path: inset(0 0 0 0);
		}
	}
</style>