import React, { Component } from 'react';
import IncomingMsg from './IncomingMsg';
import OutgoingMsg from './OutgoingMsg';
import socket from 'socket.io-client'
const socket = io('http://localhost:3001')

export default class Mesgs extends Component {

    state = {
        message: ""
    }

    handleClick() {
        const {message } = this.state
        const {room}
        socket.emit(room._id, {Message})
    }

    render() {
        return (
            <div class="mesgs">
                <div class="msg_history">
                    <IncomingMsg image="https://ptetutorials.com/images/user-profile.png" message="Test which is a new approach to have all solutions" time_date="11:01 AM    |    June 9" />
                    <OutgoingMsg message="Test which is a new approach to have all solutions" time_date="11:01 AM    |    June 9" />
                    <IncomingMsg image="https://ptetutorials.com/images/user-profile.png" message="Test, which is a new approach to have" time_date="11:01 AM    |    Yesterday" />
                    <OutgoingMsg message="Apollo University, Delhi, India Test" time_date="11:01 AM    |    Today" />
                    <IncomingMsg image="https://ptetutorials.com/images/user-profile.png" message="We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford." time_date="11:01 AM    |    Today" />
                </div>
                <div class="type_msg">
                    <div class="input_msg_write">
                        <input defaoutValue = {this.state.message} 
                        onChange={(e) = {this.setState({message: e.target.value})} type="text" class="write_msg" placeholder="Type a message" />
                        <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                    </div>
                </div>

            </div>
        )
    }
}
