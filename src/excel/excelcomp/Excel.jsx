import React, { useState } from 'react';
import * as ExcelJS from 'exceljs';

function Excel() {
  const [excelData, setExcelData] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(data);
      
      // Assuming you want to read data from the first worksheet
      const worksheet = workbook.getWorksheet(1);

      const rows = [];
      worksheet.eachRow((row) => {
        const rowData = [];
        row.eachCell((cell) => {
          rowData.push(cell.value);
        });
        rows.push(rowData);
      });

      setExcelData(rows);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {excelData && (
        <table>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Excel;
