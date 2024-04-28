import { useState } from 'react'
import './App.css'
import CakeView from './features/cake/CakeView'
import SweetView from './features/sweet/SweetView'
import UserView from './features/users/UserView'
import { Provider } from 'react-redux'
import store from './app/store'
import store2 from './app/store2'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './features2/components/Layout'
import Products from './features2/components/Products'
import Carts from './features2/components/Carts'

function App() {
  const route=createBrowserRouter([
    {path:"/",
  element:<Layout/>,
  children:[{
    index:true,
    element:<Products/>
  },{
    path:"/cart",
    element:<Carts/>
  }]
}
  ])
  return (
    // <Provider store={store}>
    //   <CakeView/>
    //   <SweetView/>
    //   <UserView/>
    // </Provider>

    <>
<RouterProvider router={route}/>
</> 
  )
}
export default App
