// import React, { useState } from 'react';
// import ReactDataGrid from 'react-data-grid';

// const ExcelReactDataGrid = () => {
//   const [rows, setRows] = useState([{ id: 0, title: '', count: 0 }]);
//   const [columns, setColumns] = useState([
//     { key: 'id', name: 'ID' },
//     { key: 'title', name: 'Title' },
//     { key: 'count', name: 'Count' }
//   ]);

//   const handleAddRow = () => {
//     const newRow = { id: rows.length, title: '', count: 0 };
//     setRows([...rows, newRow]);
//   };

//   const handleDeleteRow = () => {
//     setRows(rows.slice(0, -1));
//   };

//   const handleAddColumn = () => {
//     const newColumn = { key: `newColumn${columns.length}`, name: `New Column ${columns.length}` };
//     setColumns([...columns, newColumn]);
//   };

//   const handleDeleteColumn = () => {
//     setColumns(columns.slice(0, -1));
//   };

//   return (
//     <div>
//       <button onClick={handleAddRow}>Add Row</button>
//       <button onClick={handleDeleteRow}>Delete Row</button>
//       <button onClick={handleAddColumn}>Add Column</button>
//       <button onClick={handleDeleteColumn}>Delete Column</button>
//       <ReactDataGrid
//         columns={columns}
//         rowGetter={i => rows[i]}
//         rowsCount={rows.length}
//         minHeight={500}
//       />
//     </div>
//   );
// };

// export default ExcelReactDataGrid;


import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';

const ExcelReactDataGrid = () => {
  const [rows, setRows] = useState([{ id: 0, title: '', count: 0 }]);
  const [columns, setColumns] = useState([
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' }
  ]);

  console.log('Columns:', columns);
  console.log('Rows:', rows);

  const handleAddRow = () => {
    const newRow = { id: rows.length, title: '', count: 0 };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = () => {
    setRows(rows.slice(0, -1));
  };

  const handleAddColumn = () => {
    const newColumn = { key: `newColumn${columns.length}`, name: `New Column ${columns.length}` };
    setColumns([...columns, newColumn]);
  };

  const handleDeleteColumn = () => {
    setColumns(columns.slice(0, -1));
  };

  return (
    <div>
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleDeleteRow}>Delete Row</button>
      <button onClick={handleAddColumn}>Add Column</button>
      <button onClick={handleDeleteColumn}>Delete Column</button>
      {columns && rows && columns.length > 0 && rows.length > 0 && (
        <ReactDataGrid
          columns={columns}
          rowGetter={i => rows[i]}
          rowsCount={rows.length}
          minHeight={500}
        />
      )}
    </div>
  );
};

export default ExcelReactDataGrid;

