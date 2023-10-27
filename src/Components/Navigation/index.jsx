import React from "react";
import { NavLink } from "react-router-dom";
import { myRoutes } from "../MyRoutes";
import styles from "../Navigation/style.module.css"
const Navigation =()=>{
    return(
      <header>
        <div className="container">
            <div className="row">
            <div className="logo">
                <img src="/public/Logo.svg" alt="" />
            </div>
            <nav>
                {myRoutes.map(({Id,path,title})=>{
                    return <NavLink className={styles} key={Id} to={path}>{title}</NavLink>
                })}
            </nav>
            </div>
            </div> 
        </header>
    )
}
export default Navigation