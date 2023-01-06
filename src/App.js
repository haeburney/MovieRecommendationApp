//import styles from "./App.module.css";
//import { useState, useEffect } from "react";
//import Movie from "./component/Movie";
import {BrowserRouter, Switch, Route, Routes, Link} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
   /*  <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router> */
  );
}

// App.js는 router를 render한다.
// router는 URL을 보고있는 component 이고


export default App;
