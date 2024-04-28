import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './userSlice';

const UserView = () => {
  let user= useSelector(state=>state.user);
  let dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  
  return (
    <div>
        <h2>List of  Users</h2>
        
          {user.loading && <div>Loading....</div>}
          {!user.loading && user.error ? <div>Error:{user.error}</div>:null }
          {!user.loading && user.users.length>0 ?
        <ul>
          {user.users.map(v=>(
            <li key={v.id}>{v.login}</li>
          ))}
        </ul>:null 
        }
    
    </div>
  )
}

export default UserView