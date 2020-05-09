import React from 'react'; 

function LoginForm({ LoginFunction }) {
    return (
       <form className="Form" onSubmit={(e)=>LoginFunction(e)}>
           <p><label htmlFor="loginEmail">Email</label></p>
           <p><input type="text" name="loginEmail"/></p>
           <p><label htmlFor="loginPassword">Password</label></p>
           <p><input type="password" name="loginPassword"/></p>
           <p className="fakelink">Trouble Logging In?</p>
           <p><button>Log In</button></p>
        </form>
    );
}

export default LoginForm;