import React from "react";
import "./topbar.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import shubhamImg from "../../assets/Images/shubhamImg.jpg";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = false;

  return (
    <div className="top">
      <div className="topLeft">
        <FacebookIcon className="iconPadding" />
        <TwitterIcon className="iconPadding" />
        <InstagramIcon className="iconPadding" />
        <YouTubeIcon className="iconPadding" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">CONTACT</li>
          {/* user asel tarach LOGOUT disel, jar user login nasel tar nahi disnar */}
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topRightImg" src={shubhamImg} alt="ProfileImage" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <SearchIcon className="topRightSearch" />
      </div>
    </div>
  );
};

export default TopBar;
