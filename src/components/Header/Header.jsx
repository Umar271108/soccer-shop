import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-title">
                            <h1 className="title">DreamTeam</h1>
                        </div>

                        <div className="header-nav">
                            <NavLink className="header-link">Home</NavLink>
                            <NavLink className="header-link">News</NavLink>
                            <NavLink className="header-link">Shop</NavLink>
                            <NavLink className="header-link">About</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header