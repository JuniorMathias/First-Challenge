import React, {Component} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import { Botao, Hlogin, Formu ,Nav,Container,Middle,Parag, } from "../../styles";
import './login.css';

class Login extends Component{
    
    constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        emailError: '', 
        passError: ' ',

    };
    this.entrar = this.entrar.bind(this); 
}
entrar(e){
    e.preventDefault(); // to don't reload the page
    this.validate();  
   
}

// validation of form

validate = () => {
    let emailError = " ";
    let passError = " ";
  
    
    if(!this.state.email.includes("@")){
        emailError = "Invalid email";
        this.setState({color: "red",})
    }
    if(!this.state.password){
        passError = "Passoword cannot be blank";
        
    }
    if(emailError || passError){
        this.setState({emailError, passError});  
        return false;
    }
    return true;
}
 
        

    render(){
        let inputStyle = { border: '1px solid #DDD'};

    return (
       
           <div >
               <Container>  

                   <Nav> <Parag> Group Discussions </Parag>  </Nav>

               <Middle> 
                
               <Formu><form onSubmit={this.entrar} id="login">

                <Hlogin> Holla, Amigo! </Hlogin>
                <p> Log in to your Thunder account to get back your codes or new user   <a href="#resgister" >Sing Up</a> </p> <br/>
                
                <input type="email" autoComplete="off" autoFocus value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})} placeholder="E-mail"
                    style={inputStyle} id="email" />
                 
                 <div style={{fontSize: 12, color: "red"}}> {this.state.emailError}  </div>
               
              
                <input type="password" autoComplete="off" autoFocus value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})} placeholder="Password"/>
                  
                <div style={{fontSize: 12, color: "red"}}> {this.state.passError}  </div> 
              

                <Botao  onClick={this.sendButton} value="Submit"> {this.props.children} SING IN  </Botao> <br/>

                   <Link to="/forgetpass" id="link" > Forgot your password? </Link><br/>
                
                </form> </Formu> 
                
                </Middle></Container>
            </div>
        )
    }
}

export default withRouter(Login);