import React from 'react'; 
//Components
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccount({CreateAccountFunction}) {
    return(
        <div className="Wrapper CreateAccount">
            <p className="welcomePillar">WELCOME TO PILLAR.</p>
            <div className="CreateWrapper">
            <CreateAccountForm CreateAccountFunction={CreateAccountFunction}/>
            <div className="CreateInformation">
                <p className="CreateTitle">About Pillar</p>
                <p>Pillar is a social media platform that allows people to share and generate content related to fitness and nutrition</p>
                <p> —— Track your workouts </p>
                <p> ———— Follow your favourite athletes </p>
                <p> —————— Generate your own workouts to share</p>
                </div>
            </div>
            </div>
    )
}

export default CreateAccount;