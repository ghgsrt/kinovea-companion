<script lang="ts">
	import TabC from './Tab.svelte';

	export let tabs: Tab[];

	let activeTab: number | null = null;
</script>

<ul>
	<!-- svelte-ignore missing-declaration -->
	{#each tabs as tab, i}
		<TabC tab={{ ...tab, setActive: () => (activeTab = i) }} />
		<hr
			style={`border-color: rgba(255, 0, 0, ${
				activeTab === i ? 0.85 + ') !important' : 0.3 + ')'
			}`}
		/>
	{/each}
</ul>

<style>
	ul {
		width: 100%;
		/* background: #282828a0; */
		background: rgb(219, 219, 219);
		padding: 0;
	}

	hr {
		margin-top: 3px;
	}

	ul:hover > hr {
		/* border-color: rgba(255, 166, 0, 0.6) !important; */
		border-color: red !important;
	}
</style>
