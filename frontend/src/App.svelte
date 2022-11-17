<script lang="ts">
	import { Svrollbar } from 'svrollbar';
	import Dashboard from './components/Dashboard.svelte';
</script>

<main>
	<Svrollbar />
	<Dashboard />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>
