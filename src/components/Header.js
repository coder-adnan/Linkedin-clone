import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOptions from "./HeaderOptions";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img
            src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
            alt=""
          />

          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOptions Icon={ChatIcon} title="Messaging" />
          <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
          <HeaderOptions
            avatar="https://media.licdn.com/dms/image/C4D03AQEFXXqb1oIswQ/profile-displayphoto-shrink_100_100/0/1655998588424?e=1686787200&v=beta&t=eQ_RB7yUjQA00I4csM2IScKq8DFcxkWutbR7DkNzblE"
            title="me"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
