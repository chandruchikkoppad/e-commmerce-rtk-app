import React from 'react';
import ExcelJS from 'exceljs';

class ExcelGenerator extends React.Component {
  generateExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    // Add some data to the worksheet
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 32 },
      { header: 'Age', key: 'age', width: 15 }
    ];

    worksheet.addRow({ id: 1, name: 'John Doe', age: 30 });
    worksheet.addRow({ id: 2, name: 'Jane Smith', age: 25 });
    worksheet.addRow({ id: 3, name: 'Bob Johnson', age: 40 });

    // Generate Excel file
    workbook.xlsx.writeBuffer().then(buffer => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'example.xlsx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.generateExcel}style={{color:"white"}}>Generate Excel-1</button>
      </div>
    );
  }
}

export default ExcelGenerator;
