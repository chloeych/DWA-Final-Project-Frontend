import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

//import pages
import CreateAccount from './pages/CreateAccount.js'; 
import Dashboard from  './pages/Dashboard.js'; 
import Login from './pages/Login.js'; 
import UserProfile from './pages/UserProfile.js';
import CreatePost from './pages/CreatePost.js';

//import components 
import Header from './components/Header.js';

//styling
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [userInformation, setUserInformation] = useState({});

  const firebaseConfig = {
  apiKey: "AIzaSyBV6DxXt1G7u6aHW-1devVzlbNdLx-GVq0",
  authDomain: "final-project-dwa-d2cba.firebaseapp.com",
  databaseURL: "https://final-project-dwa-d2cba.firebaseio.com",
  projectId: "final-project-dwa-d2cba",
  storageBucket: "final-project-dwa-d2cba.appspot.com",
  messagingSenderId: "721781788829",
  appId: "1:721781788829:web:14027a9031baae902b8474",
};

useEffect(()=>{
  if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
  }

 firebase
 .auth()
 .setPersistence(firebase.auth.Auth.Persistence.SESSION)
 .catch(function(e) {
   console.log("AUTH ERROR",e);
 });


}, [firebaseConfig]);

useEffect(()=> {
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      setUserInformation(user);
      setLoggedIn(true); 
    }
    else{
      setLoggedIn(false);
    }
    setLoading(false);
  });
}, []);

  //Login
  function LoginFunction(e){
  e.preventDefault(); 
  let email = e.currentTarget.loginEmail.value;
  let password = e.currentTarget.loginPassword.value;

  firebase
  .auth()
  .signInWithEmailAndPassword(email,password)
  .then(function(response){
    console.log("LOGIN RESPONSE", response); 
    setLoggedIn(true); 
  })
  .catch(function(error){
    console.log("LOGIN ERROR", error)
  });
}

 // Logout 
 function LogoutFunction(){
  firebase
  .auth()
  .signOut()
  .then(function(){
    setLoggedIn(false)
  })
  .catch(function(error){
    console.log(" LOGOUT ERROR", error);
  });
}

// Create Account
function CreateAccountFunction(e){
  e.preventDefault(); 
  console.log("form payload", e);  
  const email = e.currentTarget.createEmail.value; 
  const password = e.currentTarget.createPassword.value;

  console.log('email', email); 
  console.log("password", password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(response){
      console.log("VALID ACCOUNT CREATE", response);
      setLoggedIn(true);
     })
    .catch(function(e){
      console.log("CREATE ACCOUNT ERROR", e);
      
     });
  }

function createPostWithImage(e){
  e.preventDefault();
   // IMG upload and access to firebase
   const storageRef = firebase.storage().ref();
   const fileReference = e.currentTarget.postImage.files[0];
   const uploadTask = storageRef
    .child(`${fileReference.name}`) 
    .put(fileReference);


    let text = e.currentTarget.postText.value; 
    let image = e.currentTarget.postText.image;
    const idFromText = text.replace(/\s+/g, "-").toLowerCase().substr(0, 16);
    let userId = userInformation.uid;

    uploadTask.on(
      "state_changed",
      (snapshot) => {console.log("snapshot", snapshot)}, 
      (error) => {console.log(error);},
      () => {
        
         uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           console.log("file available at", downloadURL)

           axios  
           .get(
            //local:
            `https://safe-shore-20320.herokuapp.com/create?text=${text}&id=${idFromText}&userId=${userId}&image=${downloadURL}`
            //production: 
           //  `https://myheroku-deployed-api.heroku.com`
           )
           .then(function(response){
               console.log("response", response); 
           })
           .catch(function(error){
               console.log(error);
           });

        });
      }
    );
}

function updateProfileFunction(e){
  e.preventDefault();
  console.log("form payload", e);
  let fName = e.currentTarget.fName.value;
  let lName = e.currentTarget.lName.value;
  let userId = userInformation.uid;
  let bio = e.currentTarget.bio.value;
  let activityLevel = e.currentTarget.activityLevel.value;
  let age = e.currentTarget.age.value;
  
  const idFromText = userId.replace(/\s+/g, "-").toLowerCase().substr(0, 16);

  axios  
     .get(
      //local:
      `https://safe-shore-20320.herokuapp.com/updateProfile?firstName=${fName}&lastName=${lName}&age=${age}&activityLevel=${activityLevel}&bio=${bio}&id=${idFromText}`
      //production: 
      //  `https://myheroku-deployed-api.heroku.com`
      )
      .then(function(response){
      console.log("response", response); 
      })
      .catch(function(error){
       console.log(error);
      });
}


if (loading) return null;

  return (
    <div className="App">
      <Header LogoutFunction={LogoutFunction} isLoggedIn={loggedIn}/>
      <Router>

        <Route exact path="/">
         {!loggedIn ? <Redirect to="/login"/> : <Dashboard userInformation={userInformation} createPostWithImage={createPostWithImage}/>}
        </Route>

        <Route exact path="/login">
        {!loggedIn ? (<Login LoginFunction={LoginFunction}/>) : (<Redirect to="/"/>)}
       </Route>

       <Route exact path="/create-account">
       {!loggedIn ? (<CreateAccount CreateAccountFunction={CreateAccountFunction}/>) : (<Redirect to="/"/>)}
       </Route>

       <Route exact path="/userprofile">
       {!loggedIn ? <Redirect to="/login"/> : <UserProfile updateProfileFunction={updateProfileFunction} userInformation={userInformation}/>}
       </Route>

       <Route exact path="/createpost">
       {!loggedIn ? <Redirect to="/login"/> : <CreatePost createPostWithImage={createPostWithImage}/>}
       </Route>

      </Router>


    </div>
  );
  }

export default App;


