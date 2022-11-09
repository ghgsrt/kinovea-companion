<script lang="ts">
	import {Svrollbar} from 'svrollbar';
	import Dashboard from './components/Dashboard.svelte';
	let DankSvrollbar = Svrollbar;
	let AppDashboard = Dashboard;
</script>

<main>
	<DankSvrollbar />
	<AppDashboard />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>
