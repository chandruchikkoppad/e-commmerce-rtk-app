import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let cart= useSelector(state=>state.cart);
  console.log(cart);
  return (
    <div style={{width:"100%",height:"10vh",background:'lightGrey',position:"sticky",top:0,borderBottom:"2px solid orange",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <h3 style={{fontStyle:"italic",fontSize:"20px",width:"60%",textAlign:"left",margin:"0px 80px"}}>ReduxToolkit APP</h3>
      <ul style={{listStyle:"none",display:"flex",justifyContent:"space-evenly",width:"40%"}}>
        <li>
          <Link to="/" style={{textDecoration:"none",fontWeight:800}}>Home</Link>
        </li>
        <li>
          <Link to="/cart" style={{textDecoration:"none",fontWeight:800}}>My Cart:{cart.length}</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar