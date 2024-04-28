import React, { useState, useRef } from 'react';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';
import * as ExcelJS from 'exceljs';
import "./Excel.scss"

const ExcelViewer2: React.FC = () => {
  const [excelData, setExcelData] = useState<any[][]>([]);

  const generateExcelFile = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
    const worksheet2 = workbook.addWorksheet('Sheet2');

    worksheet.addRow(['Name', 'Age', 'Email']);
    worksheet.addRow(['Chandru C', 30, 'Chandru@example.com']);
    worksheet.addRow(['Divin L', 25, 'Divin@example.com']);
    worksheet2.addRow(['Chandru C', 30, 'Chandru@example.com']);

    workbook.xlsx.writeBuffer().then(buffer => {
      parseExcelData(buffer);
    });
  };

  const parseExcelData = (fileData: ArrayBuffer) => {
    const workbook = new ExcelJS.Workbook();
    workbook.xlsx.load(fileData)
      .then(workbook => {
        const worksheet = workbook.getWorksheet(1);
        const data: any[][] = [];
        worksheet.eachRow({ includeEmpty: true }, (row) => {
          const rowData: any[] = [];
          row.eachCell((cell) => {
            rowData.push(cell.value);
          });
          data.push(rowData);
        });
        setExcelData(data);
      })
      .catch(error => {
        console.error('Error parsing Excel data:', error);
        setExcelData([]);
      });
  };

  const handleAddRow = () => {
    const newData = Handsontable.helper.deepClone(excelData);
    newData.push(new Array(excelData[0].length).fill(''));
    setExcelData(newData);
  };

  const handleDeleteRow = () => {
    if (excelData.length > 1) {
      const newData = Handsontable.helper.deepClone(excelData);
      newData.pop();
      setExcelData(newData);
    }
  };

  const handleAddColumn = () => {
    const newData = Handsontable.helper.deepClone(excelData);
    newData.forEach(row => row.push(''));
    setExcelData(newData);
  };

  const handleDeleteColumn = () => {
    if (excelData[0].length > 1) {
      const newData = Handsontable.helper.deepClone(excelData);
      newData.forEach(row => row.pop());
      setExcelData(newData);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current && excelData.length > 0) {
      new Handsontable(containerRef.current, {
        data: excelData,
        colHeaders: true,
        rowHeaders: (index) => index + 1,
        stretchH: 'all',
        height: 300,
        width: 600
      });
    }
  }, [excelData]);

  return (
    <div>
      <h2>Excel Viewer</h2>
      {excelData.length === 0 ? (
        <img src="https://cdn.pixabay.com/photo/2018/09/07/17/17/excel-3661114_1280.png" alt="" onClick={generateExcelFile} />
      ) : (
        <>
          <button onClick={handleAddRow}>Add Row</button>
          <button onClick={handleDeleteRow}>Delete Row</button>
          <button onClick={handleAddColumn}>Add Column</button>
          <button onClick={handleDeleteColumn}>Delete Column</button>
        </>
      )}

      <div id="excel-container" ref={containerRef}></div>
    </div>
  );
};

export default ExcelViewer2;
//!-------------------------------------------------------------------------------
