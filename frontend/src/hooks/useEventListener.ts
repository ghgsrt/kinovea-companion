import { onMount, onDestroy } from 'svelte';

export function useEventListener(event: string, callback: (e: Event) => void) {
	onMount(() => window.addEventListener(event, callback));
	onDestroy(() => window.removeEventListener(event, callback));
}
