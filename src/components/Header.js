import React from 'react'; 

function Header({LogoutFunction, isLoggedIn}){
    return(
        <header className="Header">
            <div className="headerWrapper">
            <div className="headerLogo"> Logo </div>
            <nav className="Header_nav">
                {isLoggedIn && <a href="/">Dashboard</a>}
                {!isLoggedIn && <a href="/create-account">Create Account</a>}
                {!isLoggedIn && <a href="/login">Login</a>}
                {isLoggedIn && <a href="/userprofile">Profile</a>}
                {isLoggedIn && <a onClick={()=> LogoutFunction()}>Logout</a>}
               
            </nav>
            </div>
        </header>
    )
}

export default Header;