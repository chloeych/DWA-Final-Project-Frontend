import React from 'react'; 
import logo from '../images/logo.png';

function Header({LogoutFunction, isLoggedIn}){
    return(
        <header className="Header">
            <div className="headerWrapper">
            <img className="headerLogo" src={logo} alt="logo"/>
            <div className="Header_nav">
                {isLoggedIn && <a href="/">DASHBOARD</a>}
                {!isLoggedIn && <a href="/create-account">CREATE ACCOUNT</a>}
                {!isLoggedIn && <a href="/login">LOGIN</a>}
                {isLoggedIn && <a href="/userprofile">PROFILE</a>}
                {isLoggedIn && <a href="/createpost">CREATE POST</a>}
                {isLoggedIn && <a className="logoutBtn" onClick={()=> LogoutFunction()}>LOGOUT</a>}
                <div class="underbar"></div>
            </div>
            </div>
        </header>
    )
}

export default Header;