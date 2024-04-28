// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Handsontable from 'handsontable';
// import 'handsontable/dist/handsontable.full.css';

// const ExcelViewer = () => {
//   const [excelData, setExcelData] = useState([]);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const data = new Uint8Array(event.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//       setExcelData(jsonData);
//     };
//     reader.readAsArrayBuffer(file);
//   };

//   useEffect(() => {
//     if (excelData.length > 0) {
//       const hotElement = document.getElementById('excel-container');
//       const hotInstance = new Handsontable(hotElement, {
//         data: excelData,
//         colHeaders: true,
//         rowHeaders: true,
//         stretchH: 'all',
//         height: 300,
//         width: 600
//       });
//     }
//   }, [excelData]);

//   const handleAddRow = () => {
//     const newData = Handsontable.helper.deepClone(excelData);
//     newData.push(new Array(excelData[0].length).fill(''));
//     setExcelData(newData);
//   };

//   const handleDeleteRow = () => {
//     if (excelData.length > 1) {
//       const newData = Handsontable.helper.deepClone(excelData);
//       newData.pop();
//       setExcelData(newData);
//     }
//   };

//   const handleAddColumn = () => {
//     const newData = Handsontable.helper.deepClone(excelData);
//     newData.forEach(row => row.push(''));
//     setExcelData(newData);
//   };

//   const handleDeleteColumn = () => {
//     if (excelData[0].length > 1) {
//       const newData = Handsontable.helper.deepClone(excelData);
//       newData.forEach(row => row.pop());
//       setExcelData(newData);
//     }
//   };

//   return (
//     <div>
//       <h2>Excel Viewer</h2>
//       <input type="file" onChange={handleFileChange} />
//       <div>
//         <button onClick={handleAddRow}>Add Row</button>
//         <button onClick={handleDeleteRow}>Delete Row</button>
//         <button onClick={handleAddColumn}>Add Column</button>
//         <button onClick={handleDeleteColumn}>Delete Column</button>
//       </div>
//       <div id="excel-container"></div>
//     </div>
//   );
// };

// export default ExcelViewer;


////!---------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Handsontable from 'handsontable';
// import 'handsontable/dist/handsontable.full.css';

// const ExcelViewer = () => {
//   const [excelData, setExcelData] = useState([]);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const data = new Uint8Array(event.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//       setExcelData(jsonData);
//     };
//     reader.readAsArrayBuffer(file);
//   };

//   useEffect(() => {
//     if (excelData.length > 0) {
//       const hotElement = document.getElementById('excel-container');
//       const hotInstance = new Handsontable(hotElement, {
//         data: excelData,
//         colHeaders: true,
//         rowHeaders: (index) => index + 1, // Dynamically renumber row headers
//         stretchH: 'all',
//         height: 300,
//         width: 600
//       });
//     }
//   }, [excelData]);

//   const handleAddRow = () => {
//     const newData = Handsontable.helper.deepClone(excelData);
//     newData.push(new Array(excelData[0].length).fill(''));
//     setExcelData(newData);
//   };

//   const handleDeleteRow = () => {
//     const rowIndex = parseInt(window.prompt('Enter the row index to delete'));
//     if (!isNaN(rowIndex) && rowIndex >= 0 && rowIndex < excelData.length) {
//       const newData = Handsontable.helper.deepClone(excelData);
//       newData.splice(rowIndex, 1);
//       setExcelData(newData);
//     } else {
//       alert('Invalid row index. Please enter a valid index.');
//     }
//   };

//   const handleAddColumn = () => {
//     const newData = Handsontable.helper.deepClone(excelData);
//     newData.forEach(row => row.push(''));
//     setExcelData(newData);
//   };

//   const handleDeleteColumn = () => {
//     const columnName = window.prompt('Enter the column name to delete');
//     if (columnName && columnName.trim() !== '') {
//       const columnIndex = excelData.length > 0 ? excelData[0].findIndex(name => name === columnName) : -1;
//       if (columnIndex !== -1) {
//         const newData = Handsontable.helper.deepClone(excelData);
//         newData.forEach(row => row.splice(columnIndex, 1));
//         setExcelData(newData);
//       } else {
//         alert('Column not found. Please enter a valid column name.');
//       }
//     } else {
//       alert('Please enter a column name.');
//     }
//   };
  

//   return (
//     <div>
//       <h2>Excel Viewer</h2>
//       <input type="file" onChange={handleFileChange} />
//       <div>
//         <button onClick={handleAddRow}>Add Row</button>
//         <button onClick={handleDeleteRow}>Delete Row</button>
//         <button onClick={handleAddColumn}>Add Column</button>
//         <button onClick={handleDeleteColumn}>Delete Column</button>
//       </div>
//       <div id="excel-container"></div>
//     </div>
//   );
// };

// export default ExcelViewer;

////!-------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import Handsontable from 'handsontable';
// import 'handsontable/dist/handsontable.full.css';
// import * as ExcelJS from 'exceljs';

// const ExcelViewer = () => {
//   const [excelData, setExcelData] = useState([]);

//   const generateExcelFile = () => {
//     // Create a new workbook
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Sheet1');

//     // Add sample data to the worksheet
//     worksheet.addRow(['Name', 'Age', 'Email']);
//     worksheet.addRow(['John Doe', 30, 'john@example.com']);
//     worksheet.addRow(['Jane Smith', 25, 'jane@example.com']);

//     // Write the workbook to a buffer
//     workbook.xlsx.writeBuffer().then(buffer => {
//       // Parse the buffer to display data using Handsontable
//       const data = parseExcelData(buffer);
//       setExcelData(data);
//     });
//   };

//   const parseExcelData = (fileData) => {
//     const workbook = new ExcelJS.Workbook();
//     return workbook.xlsx.load(fileData)
//       .then(workbook => {
//         const worksheet = workbook.getWorksheet(1);
//         const data = [];
//         worksheet.eachRow({ includeEmpty: true }, (row) => {
//           const rowData = [];
//           row.eachCell((cell) => {
//             rowData.push(cell.value);
//           });
//           data.push(rowData);
//         });
//         return data;
//       })
//       .catch(error => {
//         console.error('Error parsing Excel data:', error);
//         return [];
//       });
//   };

//   const handleAddRow = () => {
//     const newData = [...excelData, Array(excelData[0].length).fill('')];
//     setExcelData(newData);
//   };

//   const handleDeleteRow = () => {
//     if (excelData.length > 1) {
//       const newData = excelData.slice(0, -1);
//       setExcelData(newData);
//     }
//   };

//   const handleAddColumn = () => {
//     const newData = excelData.map(row => [...row, '']);
//     setExcelData(newData);
//   };

//   const handleDeleteColumn = () => {
//     if (excelData[0].length > 1) {
//       const newData = excelData.map(row => row.slice(0, -1));
//       setExcelData(newData);
//     }
//   };

//   return (
//     <div>
//       <h2>Excel Viewer</h2>
//       <button onClick={generateExcelFile}>Generate Excel File With Sample Data</button>
//       <button onClick={handleAddRow}>Add Row</button>
//       <button onClick={handleDeleteRow}>Delete Row</button>
//       <button onClick={handleAddColumn}>Add Column</button>
//       <button onClick={handleDeleteColumn}>Delete Column</button>
//       <div id="excel-container">
//         <Handsontable
//           data={excelData}
//           colHeaders={true}
//           rowHeaders={true}
//           stretchH="all"
//           height="300"
//           width="600"
//         />
//       </div>
//     </div>
//   );
// };

// export default ExcelViewer;

////!--------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import Handsontable from 'handsontable';
// import 'handsontable/dist/handsontable.full.css';
// import * as ExcelJS from 'exceljs';
// import "./Excel.scss"

// const ExcelViewer = () => {
//   const [excelData, setExcelData] = useState([]);

//   const generateExcelFile = () => {
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Sheet1');
//     const worksheet2=workbook.addWorksheet('Sheet2')

//     worksheet.addRow(['Name', 'Age', 'Email']);
//     worksheet.addRow(['Chandru C', 30, 'Chandru@example.com']);
//     worksheet.addRow(['Divin L', 25, 'Divin@example.com']);
//     worksheet2.addRow(['Chandru C', 30, 'Chandru@example.com']);

//     workbook.xlsx.writeBuffer().then(buffer => {
//       parseExcelData(buffer);
//     });
//   };

//   const parseExcelData = (fileData) => {
//     const workbook = new ExcelJS.Workbook();
//     workbook.xlsx.load(fileData)
//       .then(workbook => {
//         const worksheet = workbook.getWorksheet(1);
//         const data = [];
//         worksheet.eachRow({ includeEmpty: true }, (row) => {
//           const rowData = [];
//           row.eachCell((cell) => {
//             rowData.push(cell.value);
//           });
//           data.push(rowData);
//         });
//         setExcelData(data);
//       })
//       .catch(error => {
//         console.error('Error parsing Excel data:', error);
//         setExcelData([]);
//       });
//   };

//     const handleAddRow = () => {
//     const newData = Handsontable.helper.deepClone(excelData);
//     newData.push(new Array(excelData[0].length).fill(''));
//     setExcelData(newData);
//   };
//   const handleDeleteRow = () => {
//     if (excelData.length > 1) {
//       const newData = Handsontable.helper.deepClone(excelData);
//       newData.pop();
//       setExcelData(newData);
//     }
//   };
//   const handleAddColumn = () => {
//     const newData = Handsontable.helper.deepClone(excelData);
//     newData.forEach(row => row.push(''));
//     setExcelData(newData);
//   };
//   const handleDeleteColumn = () => {
//     if (excelData[0].length > 1) {
//       const newData = Handsontable.helper.deepClone(excelData);
//       newData.forEach(row => row.pop());
//       setExcelData(newData);
//     }
//   };
// console.log(excelData);
//   return (
//     <div>
//       <h2>Excel Viewer</h2>
//       {excelData.length==0 ?<><img src="https://cdn.pixabay.com/photo/2018/09/07/17/17/excel-3661114_1280.png"  alt="" onClick={generateExcelFile} />
//         Generate Excel File With Sample Data</>:<>
//         <button onClick={handleAddRow}>Add-Row</button>
//       <button onClick={handleDeleteRow}>Delete-Row</button>
//       <button onClick={handleAddColumn}>Add-Column</button>
//       <button onClick={handleDeleteColumn}>Delete-Column</button>
//         </>}

//       <div id="excel-container" ref={container => {
//         if (container && excelData.length > 0) {
//           new Handsontable(container, {
//             data: excelData,
//             colHeaders: true,
//             rowHeaders: (index) => index + 1,
//             stretchH: 'all',
//             height: 300,
//             width: 600
//           });
//         }
//       }}></div>
//     </div>
//   );
// };
// export default ExcelViewer;

////!--#################################################################################################

import React, { useState } from 'react';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';
import * as ExcelJS from 'exceljs';
import img from "./xlsx.png";

const ExcelViewer = () => {
  const [excelData, setExcelData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);

  const generateExcelFile = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
    // const worksheet2 = workbook.addWorksheet('Sheet2')

    worksheet.addRow(['Name','Age','Email','Id']);
    worksheet.addRow(['Chandru C', 30, 'Chandru@example.com','11']);
    worksheet.addRow(['Divin L',   25, 'Divin@example.com','  22']);
    worksheet.addRow(['Chandru 3 ', 29, 'Chandru@example.com','33']);
    worksheet.addRow(['Chandru 4 ', 29, 'Chandru@example.com','44']);
    worksheet.addRow(['Chandru 5 ', 29, 'Chandru@example.com','55']);
    worksheet.addRow(['Chandru 6 ', 29, 'Chandru@example.com','66']);
    worksheet.addRow(['Chandru 7 ', 33, 'Chandru@example.com','77']);
    worksheet.addRow(['', '', '', '']);

    workbook.xlsx.writeBuffer().then(buffer => {
      parseExcelData(buffer);
    });
  };

  const parseExcelData = (fileData) => {
    const workbook = new ExcelJS.Workbook();
    workbook.xlsx.load(fileData)
      .then(workbook => {
        const worksheet = workbook.getWorksheet(1);
        const data = [];
        worksheet.eachRow({ includeEmpty: true }, (row) => {
          const rowData = [];
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
    const rowIndex = parseInt(window.prompt('Enter the row index to delete'))-1;
    if (!isNaN(rowIndex) && rowIndex >= 0 && rowIndex < excelData.length) {
      const newData = Handsontable.helper.deepClone(excelData);
      newData.splice(rowIndex, 1);
      setExcelData(newData);
    } else {
      alert('Invalid row index. Please enter a valid index.');
    }
  };
  // const handleDeleteRow = () => {
  //   if (selectedRow !== null) {
  //     const newData = Handsontable.helper.deepClone(excelData);
  //     newData.splice(selectedRow, 1);
  //     setExcelData(newData);
  //     setSelectedRow(null);
  //   }
  // };
  const handleAddColumn = () => {
    const newData = Handsontable.helper.deepClone(excelData);
    newData.forEach(row => row.push(''));
    setExcelData(newData);
  };

  const handleDeleteColumn = () => {
    if (selectedColumn !== null) {
      const newData = Handsontable.helper.deepClone(excelData);
      newData.forEach(row => row.splice(selectedColumn, 1));
      setExcelData(newData);
      setSelectedColumn(null);
    }
  };

  const handleRowClick = (index) => {
    setSelectedRow(index);
    setSelectedColumn(null);
  };

  const handleColumnClick = (index) => {
    setSelectedColumn(index);
    setSelectedRow(null);
  };

  const cellNumber = selectedRow !== null && selectedColumn !== null ? `${selectedRow + 1}:${String.fromCharCode(65 + selectedColumn)}` : null;

  return (
    <div>
      <h2>Excel Viewer</h2>
      {excelData.length === 0 ? (
        <>
          Click Here To
          <img src={img} alt="" onClick={generateExcelFile} />
          Generate Excel File With Sample Data
        </>
      ) : (
        <>
          <button onClick={handleAddRow}>Add Row</button>
          <button onClick={handleDeleteRow}>Delete Row</button>
          <button onClick={handleAddColumn}>Add Column</button>
          <button onClick={handleDeleteColumn}>Delete Column</button>
        </>
      )}

      <div id="excel-container" ref={container => {
        if (container && excelData.length > 0) {
          new Handsontable(container, {
            data: excelData,
            colHeaders: true,
            rowHeaders: true,
            stretchH: 'all',
            height: 400,
            width: 700,
            afterOnCellMouseDown: (event, coords) => {
              if (coords.row !== selectedRow || coords.col !== selectedColumn) {
                handleRowClick(coords.row);
                handleColumnClick(coords.col);
              }
            }
          });
        }
      }}></div>
      {cellNumber && <p>Selected cell: {cellNumber}</p>}
    </div>
  );
};
export default ExcelViewer;
