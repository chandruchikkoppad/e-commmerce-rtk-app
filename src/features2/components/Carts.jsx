import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../cartSlice'

const Carts = () => {
  let cartData= useSelector(state=>state.cart);
  let dispatch= useDispatch()
  // console.log(cartData);
  let RemoveFromCart=(id)=>{
    dispatch(remove(id))
  }
  return (
    <section style={{width:"97vw",textAlign:"center",padding:"20px"}}>
    <h2>Products Page</h2>
    <article>
      { cartData.length>0 ?
    <ul style={{width:"100%",listStyle:"none",display:"flex",flexWrap:"wrap",gap:"20px",margin:"20px",textAlign:"center"}}>
      {cartData.map(v=>(
        <div className="card" key={v.id}>
            <div className="imgae" style={{height:"50%"}}>
                <img src={v.image} alt="" style={{width:"45%",height:"100%"}} />
            </div>
            <div className="desc" style={{height:"33%",lineHeight:"1.3em"}}>
                <h5>{v.title}</h5>
                <h4>Price:${v.price}</h4>
                {/* <p>{v.description}</p> */}
                <h6>RATING : {v.rating.rate}</h6>
            </div>
            <div className="btn">
              <button style={{background:"red"}}
              onClick={()=>RemoveFromCart(v.id)}>Remove</button>&nbsp;&nbsp;&nbsp;
              <button style={{background:"green"}}
              onClick={()=>BuyNow(v)}>Buy Now</button>
              </div>
        </div>
      ))}
    </ul>:<>Either your cart is Empty... or Something went wrong...</> 
    }
    </article>
    
</section>
)
}

export default Carts