import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <nav>
                <Link to={"/"} >Gift David</Link>
                <Link to={"/login"}>Login</Link>
            </nav>
        </header>
    );
};

export default Nav;