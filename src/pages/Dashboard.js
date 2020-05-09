import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 


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
            <p>Welcome, {email}</p>
            <div className="AllPosts">
             {allPosts.map((post, i) => (
                 <p key={i}>
                     <div className="featureWrapper">
                     <p>{email}</p> 
                     <p><img className="postImage" src={post.image} alt={post.id}></img></p>
                     <p>{post.text}</p>
                     </div>
                </p>
             ))}
            </div>
        </div>
    );
}

export default Dashboard;