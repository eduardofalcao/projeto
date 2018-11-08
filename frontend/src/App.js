import React, { Component } from 'react';
import logo from './logo.svg';
import Messaging from './messaging'
import './App.css';
import {Route, Link, Redirect} from 'react-router-dom';
import Login from "./containers/login"
import io from "socket.io-client";
const socket = io("http://localhost:3001");




class App extends Component {
  componentDidMount() {
    socket.on('connect', () => {
      alert('Conectou ao backend')
    });

    socket.on('evento1', (data) => {
      console.log("evento 1", data)

      
    })

    setInterval(() => {
      socket.emit("evento1", {data:"front"})
    }, 10000)

    
    socket.on('disconnect', () => {
      alert('Backend desconectado')
    });
  }

  render() {
    return (
      <div className="App">
       
        
        {/* 1- definicao de rota */}
        <Messaging/>
        
      </div>      
    );
  }
}

export default App;
