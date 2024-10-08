import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import Home from "../../pages/Home"
function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            // return <>
              // <Home/>
            // </>
        })
    }
  return (
    <button
     className='text-white inline-bock px-6 py-2 duration-200 hover:bg-blue-800 rounded-full'
    onClick={logoutHandler}
    >Logout</button>

  )
}

export default LogoutBtn