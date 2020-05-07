import React from 'react'; 

function LoginForm({ LoginFunction }) {
    return (
       <form className="Form SignupForm" onSubmit={(e)=>LoginFunction(e)}>
           <label htmlFor="loginEmail">Email</label>
           <input type="text" name="loginEmail"/>
           <label htmlFor="loginPassword">Password</label>
           <input type="password" name="loginPassword"/>
           <button>Submit</button>
        </form>
    );
}

export default LoginForm;