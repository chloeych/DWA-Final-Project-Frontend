import React from 'react'; 

function UpdateProfileForm({ updateProfileFunction }){
    return (
    <div>
     
    <form className="CreatePostForm" onSubmit={(e)=> updateProfileFunction(e)}>
    <h1>Update Profile</h1>
    <input type="text" name="fName" placeholder="First Name" />
    <input type="text" name="lName" placeholder="Last Name" />
    <input type="text" name="age" placeholder="Age" />
    <input type="text" name="activityLevel" placeholder="Activity Level" />
    <input type="text" name="bio" placeholder="Tell us about yourself!" />
    <p><button>Update</button></p>
    </form>
    </div>
    );
}

export default UpdateProfileForm;