import React, { useState } from 'react';

function ExcelSheet() {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const addRow = () => {
    setRows([...rows, new Array(columns.length).fill('')]);
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const addColumn = () => {
    setColumns([...columns, '']);
    setRows(rows.map(row => [...row, '']));
  };

  const deleteColumn = (index) => {
    setColumns(columns.filter((_, i) => i !== index));
    setRows(rows.map(row => row.filter((_, i) => i !== index)));
  };

  const handleCellChange = (e, rowIndex, colIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][colIndex] = e.target.value;
    setRows(updatedRows);
  };

  return (
    <div>
      <button onClick={addRow}style={{color:"white"}}>Add Row</button>
      <button onClick={addColumn}style={{color:"white"}}>Add Column</button>
      <table>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
                  />
                </td>
              ))}
              <td>
                <button onClick={() => deleteRow(rowIndex)}style={{color:"white"}}>Delete Row</button>
              </td>
            </tr>
          ))}
          <tr>
            {columns.map((_, colIndex) => (
              <td key={colIndex}>
                <button onClick={() => deleteColumn(colIndex)}style={{color:"white"}}>Delete Column</button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExcelSheet;
