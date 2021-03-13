import React from 'react';

import './Jumbotron.css';


import Profile from '../../Assets/solrak.jpg'; 

class Jumbotron extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div class="jumbotron">
                <img src={Profile} class = "profile-picture"/>
                <h1 class="profile-name">LUIS CARLOS QUESADA</h1>
                <h4 class="profile-description">Chief Technology Officer in PanaInc</h4>
            </div>
        );
    }
}

export default Jumbotron