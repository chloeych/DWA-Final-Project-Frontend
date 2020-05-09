import React from 'react'; 

function CreateAccountForm({CreateAccountFunction}){
    return (
    <div>
       <form className="Form" onSubmit={(e) => CreateAccountFunction(e)}>
           <p className="CreateTitle">Create Account</p>
           <p><label htmlFor="createEmail">Email</label></p>
           <p><input type="email" name="createEmail"/></p>
           <p><label htmlFor="createPassword">Password</label></p>
           <p><input type="password" name="createPassword"/></p>
           <p><button>Next </button></p>

       </form>
    </div>
    );
}

export default CreateAccountForm;