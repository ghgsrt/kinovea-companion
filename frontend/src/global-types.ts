type CsvFile = {
	headers: string[];
	columns: string[][];
};

type Tab = {
	name: string;
	loadProject(): void;
};
