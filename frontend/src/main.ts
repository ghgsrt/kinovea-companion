// no clue what this error is, it shouldn't exist, and it won't go away.
// but it doesn't affect anything so whatever
import './style.css';
import App from './App.svelte';

const app = new App({
	target: document.getElementById('app') as Element | ShadowRoot,
});

export default app;
