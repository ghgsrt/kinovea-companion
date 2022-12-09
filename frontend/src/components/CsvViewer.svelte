<script lang="ts">
	import useShowJson from '../hooks/useShowJSON';
	import { Line } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
	} from 'chart.js';

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	);

	const defaultOptions = {
		fill: true,
		lineTension: 0.3,
		backgroundColor: 'rgba(225, 204,230, .3)',
		borderColor: 'rgb(35, 26, 136)',
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		pointBorderColor: 'rgb(205, 130,1 58)',
		pointBackgroundColor: 'rgb(255, 255, 255)',
		pointBorderWidth: 10,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: 'rgb(0, 0, 0)',
		pointHoverBorderColor: 'rgba(220, 220, 220,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
	};

	type OptionsKeys = keyof typeof defaultOptions;
	type Options =
		| ({
				[key in OptionsKeys]: typeof defaultOptions[OptionsKeys];
		  } & { data: string[] | number[] })
		| null;

	type Data = {
		labels: string[];
		datasets: Options[];
	};

	export let file: File;
	export let userOptions: Options = null;

	const csvReader = new FileReader();
	let fileAsStr: string;
	let fileAsArr: string[][];
	let loadedFile: CsvFile;
	let data: Data;

	const CsvToArray = (data: string, delimiter = ',', omitFirstRow = false) =>
		data
			.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
			.split('\n')
			.map((v) => v.split(delimiter));

	const generateDatasets = () => {
		return loadedFile.headers.map((header, i) => ({
			...(userOptions ?? defaultOptions),
			label: header,
			data: loadedFile.columns[i],
		}));
	};

	const generateDemoDatasets = () => {
		return [
			{
				...defaultOptions,
				borderColor: 'teal',
				label: loadedFile.headers[3],
				data: loadedFile.columns[3],
			},
			{
				...defaultOptions,
				borderColor: '#FF9799',
				label: loadedFile.headers[4],
				data: loadedFile.columns[4],
			},
			{
				...defaultOptions,
				borderColor: '#F9AC53',
				label: loadedFile.headers[5],
				data: loadedFile.columns[5],
			},
			{
				...defaultOptions,
				borderColor: '#8A7AFF',
				label: loadedFile.headers[6],
				data: loadedFile.columns[6],
			},
		];
	};

	csvReader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
		console.log("Entering CsvReader Event: 'load' " + fileAsStr);
		fileAsStr = e.target?.result as string;
		fileAsArr = CsvToArray(fileAsStr);

		loadedFile = {
			headers: fileAsArr?.shift() ?? [],
			columns: fileAsArr,
		};

		data = {
			labels: loadedFile.columns[1],
			datasets: generateDemoDatasets(),
		};

		useShowJson(data);
	});
	csvReader.readAsText(file);

	$: console.log(`Data: ${JSON.stringify(data)}`);
</script>

{#if data}
	<Line {data} options={{ responsive: true }} />
{/if}

<style>
</style>
