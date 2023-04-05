import React, { useState } from 'react'
import "./../assets/home.scss";

function Home(props) {
  console.log(props.isLoggedIn.reloadUserInfo);
  const user = props.isLoggedIn.reloadUserInfo;
  return (
    <div className="home">
      <div className="user-name">
        <div>
          <h2>
            Hi,
            {user.displayName}
          </h2>
          <p>Let's track your records</p>
        </div>
        <img src={user.photoUrl} alt="" />
      </div>
      <div></div>
    </div>
  );
}

export default Home