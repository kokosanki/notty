import React from "react";
import config from "../firebase";
import Notes from "../components/Notes";

const HomePage = () => {
  return (
    <div>
      <Notes />
      <button onClick={() => config.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default HomePage;
