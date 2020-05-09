import React from 'react'; 
import CreatePostForm from '../components/CreatePostForm.js';

function CreatePost({createPostWithImage}) {
    return(
        <div className="Wrapper">
            <h2>Create Post</h2>
            <CreatePostForm CreatePostFunction={createPostWithImage}/>
        </div>
    )
}   

export default CreatePost;