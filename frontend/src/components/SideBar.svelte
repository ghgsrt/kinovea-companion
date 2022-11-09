<script lang="ts">
	import Tab from './Tab.svelte';

	export let tabs: {
		name: string;
		loadProject: () => string;
	}[];

	let activeTab: number | null = null;
</script>

<ul>
	<!-- svelte-ignore missing-declaration -->
	{#each tabs as tab, i}
		<Tab tab={{...tab, setActive: () => (activeTab = i)}} />
		<hr
			style={`border-color: rgba(255, 166, 0, ${
				activeTab === i ? 0.85 + ') !important' : 0.3 + ')'
			}`}
		/>
	{/each}
</ul>

<style>
	ul {
		width: 100%;
		background: #282828a0;
		padding: 0;
	}

	hr {
		margin-top: 3px;
	}

	ul:hover > hr {
		border-color: rgba(255, 166, 0, 0.6) !important;
	}
</style>
