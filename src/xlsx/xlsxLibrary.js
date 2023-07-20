import * as XLSX from 'xlsx';

const xlsxLibrary = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new;
    XLSX.utils.book_append_sheet(workbook, worksheet, 'workingDataSheet');
    XLSX.writeFile(workbook, 'json_to_excel.xlsx');

    const sampleData = [
        {key:"key1", value:"value1"},
        {key:"key2", value:"value2"},
        {key:"key3", value:"value3"},
        {key:"key4", value:"value4"},
        {key:"key5", value:"value5"},
        {key:"key6", value:"value6"},
    ];

    xlsxLibrary(sampleData)

}

export default xlsxLibrary;