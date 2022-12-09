<script lang="ts">
	import SideBar from './SideBar.svelte';
	// import ImageViewer from './ImageViewer.svelte';
	// import path1 from '../assets/images/path1.webp';
	// import path2 from '../assets/images/path2.jpg';
	// import { GetData } from '../../wailsjs/go/main/App';
	import CsvViewer from './CsvViewer.svelte';

	// let data: Array<{
	// 	name: string;
	// 	motion: string;
	// 	force: string;
	// }> = [
	// 	{
	// 		name: 'boy_jump',
	// 		motion: path1,
	// 		force: '...path3.fck',
	// 	},
	// 	{
	// 		name: 'girl_jump',
	// 		motion: path2,
	// 		force: '...path4.fck',
	// 	},
	// ];

	// let tabs = data.map((folder) => {
	// 	return {
	// 		name: folder.name,
	// 		loadProject: () => (src = folder.motion),
	// 	};
	// });

	// let tabNames = ['Motion', 'Force'];
	// GetData().then((data: CsvFile[]) => {
	// 	console.log(`CsvFile Data: ${data}`);
	// 	if (!data) return;
	// 	tabs = tabNames.map((name, i) => ({
	// 		name,
	// 		loadProject: () => (file = data[i]),
	// 	}));
	// });

	const tabs: Tab[] = [];
	// const tabNames: string[] = [];
	let files: FileList;
	let file: File;

	const updateTabs = () => {
		console.log('Updating Tabs: ', files);
		if (!files) return;

		for (let i = 0; i < files.length; i++) {
			tabs.push({
				name: files[0].name,
				loadProject: () => (file = files[0]),
			});
		}
	};

	$: files, updateTabs();
</script>

<div>
	<div>
		<input type="file" bind:files />
		{#if tabs.length > 0}
			<SideBar {tabs} />
		{/if}
	</div>
	<div>
		{#if file}
			<!-- <ImageViewer {src} /> -->
			<CsvViewer {file} />
		{/if}
	</div>
	<hr />
</div>

<style>
	div {
		--smallest-child: min(15%, 200px);
		min-height: 100vh;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background: #282828;
	}

	div > div:first-child {
		width: var(--smallest-child);
	}

	div > div:not(:first-child) {
		width: calc(100% - var(--smallest-child));
	}

	hr {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0;
		margin: 0;
		border-color: orange;
	}
</style>
