import { useState,useRef } from "react";
import About from "./About";


function Home(){
    const [count, setCount] = useState(0);

    const handleIncrease = () =>{
        setCount(prevCount => prevCount + 1);
    }

    return(
        <div className="Home">
            <h1>Home page</h1>
            <h1>{count}</h1>
            <About onIncrease={handleIncrease}/>
            
        </div>
    );
}export default Home;