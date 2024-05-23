import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPages from "../pages/mainPage/index";

function RouterComponent() {
   return(
      <Routes>
         <Route path={"/"} element={<MainPages/>} />
      </Routes>
   )
}

export default RouterComponent