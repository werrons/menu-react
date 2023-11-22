import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/homePage";
import SearchPage from "./Pages/SearchPage";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Search" element={<SearchPage/>}/>
      </Routes>
  );
};

export default App;