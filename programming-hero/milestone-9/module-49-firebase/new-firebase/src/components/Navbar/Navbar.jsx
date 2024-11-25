import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-4xl mb-5'>
                <NavLink className='mr-7 p-4 border rounded-xl' to='/'>Home</NavLink>
                <NavLink className='p-4 border rounded-xl' to='/login'>Login</NavLink>
        </div>
    );
};

export default Navbar;