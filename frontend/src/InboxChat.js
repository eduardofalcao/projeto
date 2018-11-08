import React, { Component } from 'react';
import './chat.css';
import ChatPeople from './ChatPeople';
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.HOST_API || "http://localhost:3001",
    timeout: 10000,
    headers: {"X-Custom-Header": 'foobar'}
});

export default class InboxChat extends Component {

    constuctor(props) {
        this.state = {
            roomSelectd: null, 
            rooms: props.rooms
        }
    }

    handleClick(room) {
        this.setState({roomSelected: room})
    }

    render() {
        const {rooms } = this.state;

        return (
            <div class="inbox_chat">
                {rooms && rooms.map( room => {
                   return <ChatPeople key = { room._id}
                   room = {room}
                    name = {room.name}
                    active_chat={roomSelected && roomSelected._id === room._id}
                    handleClick = {this.handleClick.bind(this)}/> 
                })}
            </div>
        )
    }
}
