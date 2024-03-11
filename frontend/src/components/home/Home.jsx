import React from "react";
import "./home.css";
const Home = () => {
    return(
        <div className="home d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-center">Organize your life</h1>
                <p>Become focused</p>
                <button className="home-btn p-2">Make to-do list</button>
            </div>
        </div>
    );
}

export default Home;