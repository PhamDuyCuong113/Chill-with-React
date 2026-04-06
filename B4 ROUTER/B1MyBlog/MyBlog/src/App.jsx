import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";


import AppLayout from "./AppLayout";



function App() {
  return (
          <AppLayout/>   
  );
}

export default App;