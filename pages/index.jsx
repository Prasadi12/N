import React from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
      <NavBar />
      <div>
        <h1 className="text-3xl font-bold text-center mt-5">Recent Articles</h1>
      </div>
      <div className="mx-10">
        <Card/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
