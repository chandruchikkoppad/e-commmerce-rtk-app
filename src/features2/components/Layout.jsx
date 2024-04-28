import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store2 from '../../app/store2'

const Layout = () => {
  return (
    <div>
    <Provider store={store2}>
        <Navbar/>
        <Outlet/>
    </Provider>
    </div>
  )
}

export default Layout