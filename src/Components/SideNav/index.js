import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./SideNav.css";

const SideNav = (props) => {
  const history = useHistory();

  const [selectedMenuItem, setSelectedMenuItem] = React.useState("");

  React.useEffect(() => {
    if (selectedMenuItem == "") {
      // setTimeout(() => {
      if (history.location.pathname.includes("schedule")) {
        setSelectedMenuItem("schedule");
      } else {
        setSelectedMenuItem("users");
      }
      // history.push("/users");
      // }, 500);
    }
  }, [props]);

  function exitStrategy() {
    if (window["detectMob"]()) {
      props.toggleOpenMenu();
    }
  }

  return (
    <div className="sa-sidenav-w">
      <div className="logo center">A Strum Away</div>
      <div className="greeting center">
        <div>Welcome {props.userName}</div>
      </div>
      <div className="sa-menu">
        <Link>
          <div
            className={`sa-menu-link ${
              selectedMenuItem === "users" ? "selected" : ""
            }`}
            onClick={() => {
              history.push("/users");
              setSelectedMenuItem("users");
              exitStrategy();
            }}
          >
            <div>Home</div>
          </div>
        </Link>
        <Link>
          <div
            className={`sa-menu-link ${
              selectedMenuItem === "schedule" ? "selected" : ""
            }`}
            onClick={() => {
              history.push("/users/schedule");
              setSelectedMenuItem("schedule");
              exitStrategy();
            }}
          >
            <div>Schedules</div>
          </div>
        </Link>
        <Link>
          <div
            className={`sa-menu-link ${
              selectedMenuItem === "logout" ? "selected" : ""
            }`}
            onClick={() => {
              history.push("/");
              props.setUserType("", "");
              sessionStorage.setItem("loggedIn", "false");
            }}
          >
            <div>Logout</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
