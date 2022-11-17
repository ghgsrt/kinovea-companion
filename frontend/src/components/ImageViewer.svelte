<script lang="ts">
	export let src: string;
</script>

<div>
	<img {src} alt="damn" />
</div>

<style>
	div {
		padding: 20px;
		overflow: hidden;
		height: fit-content;
		padding-bottom: 13px;
		background: #363636;
		box-shadow: inset 10px 10px 2px 1px #282828,
			inset -10px -10px 2px 1px #282828;
	}
</style>
