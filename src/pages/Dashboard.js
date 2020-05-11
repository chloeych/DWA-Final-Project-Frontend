import React, { Component, useEffect, useState } from 'react'; 
import axios from 'axios'; 


function Dashboard({ userInformation }) {
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


    console.log(allPosts);
    
    

    return(
        <div className="Wrapper">
            <div className="AllPosts">
             {allPosts.map((post, i) => (
                 <div key={i}>
                     <div className="featureWrapper">
                     <p><img className="postImage" src={post.image} alt={post.id}></img></p>
                     <p className="postBodyText">{post.text}</p>
                     

                     </div>
                </div>
             ))}
            </div>
        </div>
    );
}

export default Dashboard;