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

	// https://gist.github.com/Jezternz/c8e9fafc2c114e079829974e3764db75
	// 	alternative --> https://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript-which-contains-comma-in-data
	const csvStringToArray = (strData: string): string[][] => {
		const objPattern = new RegExp(
			'(\\,|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^\\,\\r\\n]*))',
			'gi'
		);
		let arrMatches: RegExpExecArray | null;
		let arrData: string[][] = [];
		while ((arrMatches = objPattern.exec(strData))) {
			if (arrMatches[1].length && arrMatches[1] !== ',') arrData.push([]);
			arrData[arrData.length - 1].push(
				arrMatches[2]
					? arrMatches[2].replace(new RegExp('""', 'g'), '"')
					: arrMatches[3]
			);
		}

		return arrData;
	};

	const generateDatasets = () => {
		return loadedFile.headers.map((header, i) => ({
			...(userOptions ?? defaultOptions),
			label: header,
			data: loadedFile.columns[i],
		}));
	};

	csvReader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
		console.log("Entering CsvReader Event: 'load'");
		fileAsStr = e.target?.result as string;
		fileAsArr = csvStringToArray(fileAsStr);

		loadedFile = {
			headers: fileAsArr.shift()!!,
			columns: fileAsArr,
		};

		data = {
			labels: [], // no clue, prolly one of the file.columns
			datasets: generateDatasets(),
		};

		useShowJson(data);
	});
	csvReader.readAsText(file);
</script>

{#if data}
	<Line {data} options={{ responsive: true }} />
{/if}

<style>
</style>
