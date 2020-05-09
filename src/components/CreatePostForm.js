import React from 'react'; 

function CreatePostForm({ CreatePostFunction }){
    return (
    <div>
       <form className="CreatePostForm" 
       onSubmit={(e) => CreatePostFunction(e)}>
           <p className="CreateTitle">Create</p>
           <p><label htmlFor="postImage">Upload Your Image</label></p>
           <p><input type="file" name="postImage" accept="image/*"/></p>
           <p><label htmlFor="postText">Text</label></p>
           <p><input placeholder="Enter content" type="text" name="postText"/></p>
           <p><button>Submit</button></p>

       </form>
    </div>
    );
}

export default CreatePostForm;