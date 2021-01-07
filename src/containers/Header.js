import React from "react";
import classes from "./Header.module.css";
import estrellas from "../Assests/estrellas.jpg";
import mountain from "../Assests/mountain22.png";
import Nav from "./Navigation/Nav/Nav";

const Header = (props) => {
    return (
        <React.Fragment>
            <Nav></Nav>
            <img
                className={classes.estrellas}
                src={estrellas}
                alt="lluvia de estrellas"
            />
            <h1>
                LIFE IS A JOURNEY.<br></br> YOU DESERVE THE BEST ONE
            </h1>
            <img className={classes.mountain} src={mountain} alt="montania" />
            <h2 className={classes.description}>
                Customize your van to fit your needs and lifestyle. Travel
                without schedules or expensive reservations and feel as comfort
                as home.
            </h2>
        </React.Fragment>
    );
};

export default Header;
