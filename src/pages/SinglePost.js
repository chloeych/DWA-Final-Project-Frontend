import React, {useState, useEffect} from 'react'; 
import {useParams} from 'react-router-dom';
import axios from 'axios'; 

function SinglePost(){

    const [postData, setPostData] = useState({});
    const { id } = useParams();  
    console.log("id", id);
    console.log("postData", postData);
    
    useEffect(() => {
        axios  
            .get(
             //local:
             `http://localhost:4000/post/${id}`
             //production: 
            //  `https://myheroku-deployed-api.heroku.com`
            )
            .then(function(response){
                console.log("response", response.data)
                setPostData(response.data);
            })
            .catch(function(error){
                console.log(error);
            });

    }, []);

    return(
        <div className="SinglePost Wrapper">
            <h2>Post</h2>
            <img src={postData.image} alt={postData.id}></img>
            <p>{postData.text}</p>
        </div>
    )
}

export default SinglePost;