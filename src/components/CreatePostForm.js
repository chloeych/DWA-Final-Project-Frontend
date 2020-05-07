import React from 'react'; 

function CreatePostForm({ CreatePostFunction }){
    return (
    <div>
       <form className="Form CreatePostForm" onSubmit={(e) => CreatePostFunction(e)}>
           <label htmlFor="createEmail">Post</label>
           <input type="email" name="postContent"/>
           <button>Submit</button>

       </form>
    </div>
    );
}

export default CreatePostForm;