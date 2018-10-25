import React, { Component } from 'react';
import logo from './logo.svg';
import Messaging from './messaging'
import './App.css';
import {Route, Link, Redirect} from 'react-router-dom';
import Login from "./containers/login"

function PrivateRoute({ component: Component, ...rest }) {
  const token = sessionStorage.getItem("token")
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 2- links para as rotas*/ }
        <Link to="/login">Login</Link>
        <Link to="/chat">Chat</Link>
        
        {/* 1- definicao de rota */}
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/chat" component={Messaging}/>
        <Redirect to="/login"/>
        

        
      </div>      
    );
  }
}

export default App;
