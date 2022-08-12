import React from "react";

export const Closefriend = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFrinendName">{user.username}</span>
    </li>
  );
};
