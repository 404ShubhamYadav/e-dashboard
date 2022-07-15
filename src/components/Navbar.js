import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import img from './logo.png'
import {IoMdLogOut} from 'react-icons/io';

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      <img src={img} alt="img "  className='logo'/>
      {
        auth ?
          <ul className='nav-ul li'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup">Logout <IoMdLogOut size="1em" style/>({JSON.parse(auth).name})</Link></li>
          </ul>
          :
          <ul className='nav-ul li nav-right'>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
      }
    </div>

  )
}

export default Navbar;