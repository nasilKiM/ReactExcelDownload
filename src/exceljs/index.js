import ExcelJS from 'exceljs'
import {saveAs} from 'file-saver'


const ExceljsDownload = async() => {
    //workbook => 1개의 파일
    const workbook = new ExcelJS.Workbook();

    //여러개의 sheet를 가질 수 있음. sheet1 이라는 새 워크시트를 문서에 추가
    const worksheet = workbook.addWorksheet('sheet1');
    const worksheet2 = workbook.addWorksheet('sheet2')
    const worksheet3 = workbook.addWorksheet('sheet3')

    // sheet1 워크시트에 대한 참조를 검색
    const sheet1 = workbook.getWorksheet('sheet1');
    const sheet2 = workbook.getWorksheet('sheet2');
    const sheet3 = workbook.getWorksheet('sheet3')

    const data = [
        {header: "order_id", data: ['12345678', '12345679', '12345680']},
        {header: "store_id", data: ['storeA', 'storeB', 'storeC']},
        {header: "country_id", data: ['KR', 'KR', 'KR']},
        {header: "price", data: ['15000', '10000', '20000']}
    ];  

    //worksheet1
    const columns = Object.keys(data[0]);
    worksheet.columns = columns.map((column) => ({
      header: column,
      data: column
    }));
    worksheet.insertRows(2, data);

    data.forEach((data, index) => {
        worksheet.getColumn(index +1 ).values = [data.header, ...data.data];        
    });

    //worksheet2
    const columns2 = Object.keys(data[0]);
    worksheet2.columns = columns.map((column) => ({
      header: column,
      data: column
    }));
    worksheet2.insertRows(2, data);

    data.forEach((data, index) => {
        worksheet2.getColumn(index +1 ).values = [data.header, ...data.data];        
    });

    //worksheet3
    const columns3 = Object.keys(data[0]);
    worksheet3.columns = columns.map((column) => ({
      header: column,
      data: column
    }));
    worksheet3.insertRows(2, data);

    data.forEach((data, index) => {
        worksheet3.getColumn(index +1 ).values = [data.header, ...data.data];        
    });


    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), 'practice.xlsx')
}

export default ExceljsDownload;
