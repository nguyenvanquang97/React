import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <header className="tm-site-header">
    <h1 className="tm-site-name">Stupid</h1>
    
    <p className="tm-site-description">Your Online Bookstore</p>
    
    <nav className="navbar navbar-expand-md tm-main-nav-container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tmMainNav" aria-controls="tmMainNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse tm-main-nav menu-header" id="tmMainNav">
            <ul className="nav nav-fill tm-main-nav-ul">
                <li className="nav-item"><Link className="nav-link"to={"/"}>Home</Link></li>
                
                <li className="nav-item"><a className="nav-link" >Lịch sử giao dịch</a></li>
                <li className="nav-item"><a className="nav-link" >Liên hệ</a></li>
                <li className="nav-item"><a className="nav-link" >Giỏ hàng</a></li>
               
            </ul>
        </div>
    </nav>
    
</header>
  )
}

export default Header