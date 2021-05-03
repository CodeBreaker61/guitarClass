import SideNav from "../SideNav";
import Header from "../Header";
import React from "react";
import { useHistory } from "react-router-dom";

import "./DefaultLayout.css";

const DefaultLayout = (props) => {
  const history = useHistory();
  const [openMenu, setOpenMenu] = React.useState(false);

  function toggleOpenMenu() {
    setOpenMenu(!openMenu);
  }
  React.useState(() => {
    history.push("/users");
  }, [props]);

  return (
    <div className="sa-dl-w">
      {window["detectMob"]() ? (
        openMenu ? (
          <div className="sa-dl-left">
            <SideNav
              setUserType={props.setUserType.bind(this)}
              isLoggedIn={props.isLoggedIn}
              userName={props.userName}
              toggleOpenMenu={toggleOpenMenu.bind(this)}
            />
          </div>
        ) : null
      ) : (
        <div className="sa-dl-left">
          <SideNav
            isLoggedIn={props.isLoggedIn}
            userName={props.userName}
            setUserType={props.setUserType.bind(this)}
          />
        </div>
      )}
      <div className="sa-dl-right">
        {window["detectMob"]() ? (
          <Header
            toggleOpenMenu={toggleOpenMenu.bind(this)}
            openMenu={openMenu}
            style={
              window["detectMob"]()
                ? { visibility: "visible" }
                : { visibility: "invisible" }
            }
          />
        ) : null}
        <div className="sa-dl-right-content">{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
