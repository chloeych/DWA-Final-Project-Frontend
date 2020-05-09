import React from 'react'; 
import LoginForm from "../components/LoginForm";

function Login({LoginFunction}) {
    return(
        <div className="Wrapper CreateForm">
            <p className="CreateTitle">Login</p>
            <LoginForm LoginFunction={LoginFunction}/>
        </div>
    )
}

export default Login;