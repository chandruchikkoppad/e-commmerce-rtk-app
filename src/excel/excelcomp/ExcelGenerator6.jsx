import React, { useState } from 'react';
import * as ExcelJS from 'exceljs';

function ExcelGenerator6() {
  const [workbook, setWorkbook] = useState(new ExcelJS.Workbook());
  const [worksheet, setWorksheet] = useState(null);
  const [sampleDataCounter, setSampleDataCounter] = useState(1);

  const initializeSheet = () => {
    const newWorkbook = new ExcelJS.Workbook();
    const newWorksheet = newWorkbook.addWorksheet('Sheet1');
    newWorksheet.columns = []; // Initialize columns as an empty array
    setWorkbook(newWorkbook);
    setWorksheet(newWorksheet);
  };

  const addRow = () => {
    const rowCount = worksheet.getRowCount();
    const newRowKey = 'row' + (rowCount + 1);
    const newRowData = {};
    // Generate sample data dynamically with an incrementing counter
    worksheet.columns.forEach(column => {
      newRowData[column.key] = `Sample ${sampleDataCounter}`;
    });
    setSampleDataCounter(prevCounter => prevCounter + 1);
    worksheet.addRow(newRowData);
  };


  const deleteRow = (index) => {
    worksheet.spliceRows(index, 1);
  };

  const addColumn = () => {
    worksheet.columns = [...worksheet.columns, { header: 'New Column', key: 'column' + (worksheet.columns.length + 1) }];
  };

  const deleteColumn = (index) => {
    worksheet.columns.splice(index, 1);
    worksheet.eachRow(row => {
      row.getCell(index + 1).value = null;
    });
  };

  const exportExcel = async () => {
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'excel_sheet.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={initializeSheet}>Initialize Sheet-6</button>
      <button onClick={addRow} disabled={!worksheet}>Add Row</button>
      <button onClick={addColumn} disabled={!worksheet}>Add Column</button>
      <button onClick={exportExcel} disabled={!worksheet}>Export Excel</button>
      {worksheet && (
        <table>
          <tbody>
            {worksheet.getSheetValues().map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
                <td>
                  <button onClick={() => deleteRow(rowIndex)}>Delete Row</button>
                </td>
              </tr>
            ))}
            <tr>
              {worksheet.columns?.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.header}
                  <button onClick={() => deleteColumn(colIndex)}>Delete Column</button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExcelGenerator6;
