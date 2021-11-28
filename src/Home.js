import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">
        {" "}
        <button>Go to Products </button>
      </Link>
    </div>
  );
};

export default Home;
