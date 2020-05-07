import React, { useEffect, useState } from 'react'; 
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

    return(
        <div className="Wrapper">
            <h1>Dashboard</h1>
            <p>Welcome, {email}</p>
            <h2> All Posts </h2>
            <div className="">
             {allPosts.map((post, i) => (
                 <p key={i}>{post.text}</p>
             ))}
            </div>
        </div>
    );
}

export default Dashboard;