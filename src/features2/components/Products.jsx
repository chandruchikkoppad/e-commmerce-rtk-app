import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../cartSlice'
import { fetchProducts } from '../productSlice'

const Products = () => {
    let productData= useSelector(state=>state.products)
    let cartData=useSelector(state=>state.cart);
    console.log(cartData);
    let dispatch=useDispatch()
useEffect(()=>{
    dispatch(fetchProducts())
},[])
// console.log(productData);
const AddToCart=(item)=>{
  dispatch(add(item))
}
  return (
    <section style={{width:"97vw",textAlign:"center",padding:"20px"}}>
        <h2>Products Page</h2>
        <article>
        {productData.loading && <div>Loading....</div>}
          {!productData.loading && productData.error ? <div>Error:{productData.error}</div>:null }
          {!productData.loading && productData.products.length>0 ?
        <ul style={{width:"100%",listStyle:"none",display:"flex",flexWrap:"wrap",gap:"20px",margin:"20px"}}>
          {productData.products.map(v=>(
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
                  <button style={{background:"yellow"}}
                  onClick={()=>AddToCart(v)}>Add To Cart</button>
                  </div>
            </div>
          ))}
        </ul>:null 
        }
        </article>
        
    </section>
  )
}

export default Products