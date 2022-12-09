<script lang="ts">
	export let tab: {
		name: string;
		loadProject: () => void;
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
		background: rgb(219, 219, 219);
		width: 100%;
		margin-top: 2px;
		cursor: pointer;
		text-align: right;
		border-left-color: black;
	}

	li:hover {
		transition: scale 50ms ease-out;
		scale: 1.15;
		background: linear-gradient(
			to right,
			rgb(206, 206, 206) 90%,
			rgb(219, 219, 219)
		);
	}

	p {
		color: black;
		text-decoration: none;
		/* padding-right: 10%; */
		padding-left: 7px;
	}
</style>
