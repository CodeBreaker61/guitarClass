import React from "react";
import getImg from "../../Utils/getImg";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="sa-header-w">
      <div className="sa-header-tabs-w">
        <img
          className="menu"
          src={getImg("MENU.svg")}
          onClick={() => {
            props.toggleOpenMenu();
            // console.log("hell");
          }}
        />
        <div className="heading">A Strum Away</div>
      </div>
    </div>
  );
};

export default Header;
