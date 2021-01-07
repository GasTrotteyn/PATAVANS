import React from "react";
import classes from "./Nav.module.css";
import BurgerIcon from "../BurgerIcon/BurgerIcon";

const Nav = (props) => {
    return (
        <div className={classes.contenedor}>
            <h2 className={classes.title}>PATAVANS</h2>
            <BurgerIcon></BurgerIcon>
        </div>
    );
};

export default Nav;
