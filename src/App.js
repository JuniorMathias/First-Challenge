import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";




class App extends Component{
  render(){
    return(
       
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>

        </Switch>
      </BrowserRouter>
       
    )
  }
}

export default App;