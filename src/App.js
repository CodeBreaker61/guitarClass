import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Login from "./Pages/Login";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Content from "./Pages/Content/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userType:
        sessionStorage.getItem("loggedIn") !== "false"
          ? sessionStorage.getItem("loggedIn") !== "jithin"
            ? "user"
            : "admin"
          : "",
      userName:
        sessionStorage.getItem("loggedIn") !== "false"
          ? sessionStorage.getItem("loggedIn")
          : "",
    };
  }

  setUserType = (name, type) => {
    this.setState({
      userType: type,
      userName: name,
    });
  };

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Route path="/">
          <Login
            isLoggedIn={this.state.userType}
            setUserType={this.setUserType.bind(this)}
          />
        </Route>
        <Route path="/users">
          <Content
            isLoggedIn={this.state.userType}
            userName={this.state.userName}
            setUserType={this.setUserType.bind(this)}
          />
        </Route>
      </React.Fragment>
    );
  }
}

export default App;
