import React, { Component } from 'react'
import axios from '../axios'

export default class login extends Component {
  state = {
     login:"",
     senha:""
  }

  handleClick() {
      
      const { login, senha} = this.state
      console.log(this.state)

      axios.post('/auth/login', {
          email: login,
          password: senha
      }).then ( result => {
            console.log(result)
            sessionStorage.setItem("token", result.data.token)
            this.props.history.push("/chat")
      })
      .catch((err) => {
          console.log(err)
          alert('erro')
      })
  }

  render() {
    const {login, senha} = this.state
    return (
      <div>
        Login<br/><br/>
        <input type="text" defaultValue={login} onChange={(e) => this.setState({login: e.target.value})}/><br/>
        <input type="password" defaultValue={senha} onChange={(e) => this.setState({senha: e.target.value})} /><br/>  
        <button onClick={ () => this.handleClick() }>Enviar</button>
      </div>
    )
  }
}
