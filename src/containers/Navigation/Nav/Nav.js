import React from "react";
import classes from "./Nav.module.css";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import Brand from "../../../Assests/optimized/brand.svg";

const Nav = (props) => {
    return (
        <nav className={classes.contenedor}>
            <img className={classes.title} src={Brand} alt="brand"></img>
            <BurgerIcon></BurgerIcon>
        </nav>
    );
};

export default Nav;
