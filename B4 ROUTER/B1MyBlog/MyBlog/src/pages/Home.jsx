import { useState,useRef } from "react";
import About from "./About";
import { Link } from "react-router-dom";


function Home(){
 

    return(
        <>
            <div className="Home">
                <h1>Home page</h1>
                <p>Chào mừng bạn đến với blogs luyện tập React của tôi</p>
                <p>Cùng nhau học tập mỗi ngày</p>
            </div>
        </>
        
    );
}export default Home;