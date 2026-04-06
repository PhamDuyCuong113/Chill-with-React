import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";




function AppLayout() {
  return (
        <>
            <nav style={{ margin: 10 }} >
                <Link to='/' style={{padding:5}}>{" "}Home {" "}</Link>
                <Link to='/about' style={{padding:5}}>{" "}About me {" "}</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}>
                    <Route path=":id" element={<BlogDetail/>}/>
                </Route>
                
                
            </Routes>
        </>
  );
}

export default AppLayout;