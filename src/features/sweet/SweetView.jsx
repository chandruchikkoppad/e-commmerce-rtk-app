import React, { useCallback } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { ordered, restored } from './sweetSlice';

const SweetView = () => {
  let numOfSweets= useSelector((state)=>state.sweet.numOfSweets);
  let dispatch= useDispatch();
  return (
    <div>
        <h2>Num of sweets : {numOfSweets}</h2>
        <button onClick={()=>dispatch(ordered())}>Order the Sweets</button>
        <button onClick={()=>dispatch(restored(5))}>Restore the Sweets</button>
    </div>
  )
}

export default SweetView