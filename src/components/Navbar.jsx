import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost normal-case text-xl">Coffe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         <Link to='/add' className='btn'>Add coffe</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    );
};

export default Navbar;