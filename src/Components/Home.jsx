import React from 'react'
import "./../assets/home.scss";
import { Authcontext } from "./../firebase";


function Home() {
  const auth = Authcontext();

     const userData = auth.getUser();


 
 
  // const logout = () => {
  //   if (window.confirm("Are you sure you want to log out?")) {
  //     localStorage.removeItem("user");
  //   } else {
  //     console.log("logout failed");
  //   }
  // };
  return (
    <div>
      <div className="home">
        <button onClick={(e) => {
          e.preventDefault();
          auth.logout();
          }}>Log out</button>
        <div className="user-name">
          <div>
            <h2>
              Hi,
              {userData.displayName}
            </h2>
            <p>Let's track your records</p>
          </div>
          {/* <img src={userData.photoURL} alt="img" /> */}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home