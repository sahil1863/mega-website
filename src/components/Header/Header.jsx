import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Complaints",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Complaint",
      slug: "/add-post",
      active: authStatus,
  },
  {
    name: "My Complaints",
    slug: "My-post",
    active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow-lg bg-gray-900'>
    <Container>
        <nav className='flex items-center justify-between'>
            <div className='flex items-center'>
                <Link to='/'>
                    <Logo />
                </Link>
            </div>

            <ul className='flex items-center space-x-4'>
            {navItems.map((item) => 
            item?.active ? (
              <li key={item?.name}>
                <button
                onClick={() => navigate(item?.slug)}
               className='text-white inline-bock px-6 py-2 duration-200 hover:bg-blue-800 rounded-full'
                >{item?.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header