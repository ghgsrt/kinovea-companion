<script lang="ts">
	export let tab: {
		name: string;
		loadProject: () => string;
		setActive: () => void;
	};
	// let tab = tab;
</script>

<li
	on:click={() => {
		tab?.loadProject();
		tab?.setActive();
	}}
>
	<p>{tab?.name}</p>
</li>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	li {
		list-style-type: none;
		background: #282828;
		width: 100%;
		margin-top: 2px;
		cursor: pointer;
		text-align: right;
		border-left-color: black;
	}

	li:hover {
		transition: scale 50ms ease-out;
		scale: 1.15;
		background: linear-gradient(to right, #363636 90%, #282828);
	}

	p {
		color: white;
		text-decoration: none;
		padding-right: 10%;
	}
</style>
