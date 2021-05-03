import React, { Component } from "react";
import Toaster from "../../ReusableComponents/Toaster";
import DefaultLayout from "./../../Components/DefaultLayout";
import { Router, useHistory } from "react-router-dom";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Home from "./../../Components/Home/index";

import "./Content.css";
import Schedule from "../../Components/Schedule";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toaster: {
        showToaster: false,
        toasterMessage: "",
      },
    };
  }

  renderToaster = (toasterMessage) => {
    this.setState({
      toaster: { showToaster: true, toasterMessage: toasterMessage },
    });

    setTimeout(() => {
      this.setState({
        toaster: { showToaster: false, toasterMessage: "" },
      });
    }, 3000);
  };
  render() {
    return this.props.isLoggedIn ? (
      <React.Fragment>
        <DefaultLayout
          isLoggedIn={this.props.isLoggedIn}
          userName={this.props.userName}
          setUserType={this.props.setUserType.bind(this)}
        >
          <div className="sa-content-w">
            <Switch>
              <Route exact path="/users">
                <Home isLoggedIn={this.props.isLoggedIn} />
              </Route>
              <Route exact path="/users/schedule">
                <Schedule isLoggedIn={this.props.isLoggedIn} />
              </Route>
            </Switch>
          </div>
          {this.state.toaster.showToaster ? (
            <Toaster
              toastList={{
                description: this.state.toaster.toasterMessage,
                backgroundColor: "#000",
              }}
              position="top-center"
              deleteTime={3000}
            />
          ) : null}
        </DefaultLayout>
      </React.Fragment>
    ) : null;
  }
}

export default Content;
