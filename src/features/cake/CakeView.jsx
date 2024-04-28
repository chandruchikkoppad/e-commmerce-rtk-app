import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restored } from './cakeSlice';

const CakeView = () => {
    let numOfCakes=useSelector((state)=>state.cake.numOfCakes);
    let dispatch= useDispatch();
  return (
    <div>
        <h2>Num of cakes : {numOfCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>Order the Cake</button>
        <button onClick={()=>dispatch(restored(3))}>Restore the Cake</button>
    </div>
  )
}

export default CakeView