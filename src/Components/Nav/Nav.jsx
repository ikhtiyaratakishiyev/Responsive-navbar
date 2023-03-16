import React from 'react'
import './Nav.scss'
import Menu from "../../Assets/Icons/Menu.svg"




const Nav = () => {
    return (
        <nav>
            <div className="container">
                <h1>Logo</h1>
                <ul className='nav-menu '>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Products</li>
                    <li className='nav-item'>Contact</li>
                </ul>
                <div className="btn-c">
                    <button id='btn-login'>Login</button>
                    <button id='btn-signUp'>Sign Up</button>
                    <img className='nav-icon' src={Menu} alt="" />
                </div>

            </div>
        </nav>
    )
}

export default Nav