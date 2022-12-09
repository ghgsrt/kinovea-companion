package csv

import (
	"encoding/csv"
	"fmt"
	"log"
	"os"
	"strings"
)

type CsvFile struct {
	Headers []string
	Columns [][]string
}

func newCsvFile(data [][]string) CsvFile {
	var csvFile CsvFile

	for i, line := range data {
		var column []string
		for _, field := range line {
			if i > 0 {
				csvFile.Headers = append(csvFile.Headers, field);	
			} else {
				column = append(column, field)
			}
		}
		
		csvFile.Columns = append(csvFile.Columns, column)
	}

	return csvFile
}

func prependStrArr(src [][]string, arr []string) [][]string {
	src = append(src, []string{});
	copy(src[1:], src);
	src[0] = arr

	return src
}

func loadCsv(path string) CsvFile {
	f, err := os.Open(path)
    if err != nil {
		fmt.Printf("ERR: open\n")
        log.Fatal(err)
    }

	defer f.Close()

	csvReader := csv.NewReader(f)
	headers, err := csvReader.Read();
	if err != nil {
		fmt.Printf("ERR: headers\n" + strings.Join(headers, ", ") + "\n")
		log.Fatal(err);
	}

	data, err := csvReader.ReadAll()
	if err != nil {
		fmt.Printf("ERR: read\n")
		log.Fatal(err)
	}

	csvFile := newCsvFile(prependStrArr(data, headers))
	fmt.Printf("%+v\n", csvFile)

	return csvFile
}

func getPaths() []string {
	// get paths to force and motion data
	home, err := os.UserConfigDir()
	if err != nil {
		log.Fatal(err)
	}

	todo := []string{strings.Replace(home, "AppData\\Roaming", "Documents\\My SPARK Data\\Saved Work\\force_110122.csv", -1)}
	fmt.Println(todo)

	return []string{"force_110122.csv"}
}

func LoadData() []CsvFile {
	var files []CsvFile
	
	paths := getPaths();
	for _, path := range paths {
		file := loadCsv(path)
		files = append(files, file)
	}

	return files
}
