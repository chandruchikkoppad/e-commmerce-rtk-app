import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Excel from './excel/excelcomp/excel.jsx'
import ExcelSheet from './excel/excelcomp/ExcelSheet.jsx'
import ExcelGenerator from './excel/excelcomp/ExcelGenerator.jsx'
import ExcelReactDataGrid from './excel/excelcomp/ExcelReactDataGrid.jsx'
import ExcelGenerator6 from './excel/excelcomp/ExcelGenerator6.jsx'
import ExcelReader from './excel/excelcomp/ExcelReader.jsx'
import ExcelViewer from './excel/excelcomp/ExcelViewer.jsx'
import ExcelViewer2 from './excel/excelcomp/ExcelViewer2.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
 {/* <ExcelReader/>
 <ExcelViewer/> */}
 {/* <ExcelViewer2/> */}
  </>,
)
