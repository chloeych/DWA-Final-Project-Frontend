import React from 'react'; 

function CreatePostForm({ CreatePostFunction }){
    return (
    <div>
       <form className="CreatePostForm" 
       onSubmit={(e) => CreatePostFunction(e)}>
           <p className="CreateTitle">Create</p>
           <p><input type="file" name="postImage" accept="image/*"/></p>
           <p><textarea cols="52" rows="8" placeholder="Enter content" type="text" name="postText"/></p>
           <p><button>Submit</button></p>

       </form>
    </div>
    );
}

export default CreatePostForm;