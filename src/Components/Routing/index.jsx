import React from "react";
import { Route, Routes } from "react-router";
import { myRoutes } from "../MyRoutes";
const Routing = () => {
  return (
      <Routes>
      {
        myRoutes.map(({id,path,Element})=>{
          return(
            <Route key={id} path={path} element={Element}/>
          
        )})
      }
      </Routes>
    
  );
};
export default Routing;
