import React, { Component } from 'react';
import InboxPeople from './InboxPeople';
import Mesgs from './Mesgs';
import './chat.css';
import PrivateRouter from "./components/PrivateRouter"
import {Route} from "react-router-dom"
import Login from "./containers/login"

class Messaging extends Component {



    render() {
        return (
            <div class="container">
                <h3 class=" text-center">Messaging</h3>
                <div class="messaging">
                    <div class="inbox_msg">
                        <InboxPeople />
                        <Route path="/login" component={Login}/>
                        <PrivateRouter path="/chat" />
                    </div>
                     <p class="text-center top_spac"> Design by <a target="_blank" href="jsx-a11y/href-no-hash">Sunil Rajput</a></p>
                </div>
            </div>
        );
    }
}
                                                        
export default Messaging;
