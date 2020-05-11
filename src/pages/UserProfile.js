import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import {useParams} from 'react-router-dom';
import Popup from "reactjs-popup";
import UpdateProfileForm from '../components/UpdateProfileForm.js';

function UserProfileComponent({ updateProfileFunction, userInformation }){
    const [userData, setUserData] = useState(""); 
 
    
    useEffect(() => {
        axios  
            .get(
             //local:
             `http://localhost:4000/userprofile`
             //production: 
            //  `https://myheroku-deployed-api.heroku.com`
            )
            .then(function(response){
                console.log("response", response.data)
                setUserData(response.data[0]);
            })
            .catch(function(error){
                console.log(error);
            });

    }, []);

    return(
        <div className="CreateUser Wrapper">
            <h2>User Information</h2>
        <p>First Name: {userData.firstName}</p>
        <p>Last Name: {userData.lastName} </p>
        <p>Age: {userData.age} </p>
        <p>Activity Level: {userData.activityLevel} </p>
        <p>Bio: {userData.bio} </p>
        <Popup className="popupbox" trigger={<button className="UpdateProfileBtn"> Update Profile </button>} modal closeOnDocumentClick>
            <UpdateProfileForm updateProfileFunction={updateProfileFunction}/>
        </Popup>
        </div>
    )
}

export default UserProfileComponent;