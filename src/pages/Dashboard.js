import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 

//Components 
import CreatePostForm from '../components/CreatePostForm.js';

function Dashboard({ userInformation, createPostWithImage }) {
    console.log("userInformation", userInformation); 
    const [allPosts, setAllPosts] = useState([]);
    const email = userInformation.email; 
    const uid = userInformation.uid;

    useEffect(() => {
        axios  
            .get(
             //local:
             `http://localhost:4000/`
             //production: 
            //  `https://myheroku-deployed-api.heroku.com`
            )
            .then(function(response){
                console.log("response", response.data)
                setAllPosts(response.data);
            })
            .catch(function(error){
                console.log(error);
            });

    }, []);

    // Create a Post 
    async function CreatePostFunction(e){
        e.preventDefault();
        let text = e.currentTarget.postText.value; 
        const idFromText = text.replace(/\s+/g, "-").toLowerCase().substr(0, 16);
        let userId = uid;

        axios  
        .get(
         //local:
         `http://localhost:4000/create?text=${text}&id=${idFromText}&userId=${userId}`
         //production: 
        //  `https://myheroku-deployed-api.heroku.com`
        )
        .then(function(response){
            console.log('response', response); 
        })
        .catch(function(error){
            console.log(error);
        });
    }


    console.log(allPosts);

    return(
        <div className="Wrapper">
            <h1>Dashboard</h1>
            <p>Welcome, {email}</p>
            <h2> All Posts </h2>
            <div className="">
             {allPosts.map((post, i) => (
                 <p key={i}>
                     <a href={`/post/${post.id}`}>{post.text}</a> 
                     </p>
             ))}
            </div>
            <h2>Create Post</h2>
            <CreatePostForm CreatePostFunction={createPostWithImage}/>
        </div>
    );
}

export default Dashboard;