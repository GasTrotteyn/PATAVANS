import React from "react";
import classes from "./Header.module.css";
import Nav from "../../containers/Navigation/Nav/Nav";

const Header = (props) => {
    return (
        <div className={classes.container}>
            <Nav></Nav>
            <div className={classes.estrellas}></div>
            <h1
                style={{
                    "font-family": "Gilroy-Bold ☞",
                    "font-weight": "normal",
                }}
            >
                LIFE IS A JOURNEY.<br></br> YOU DESERVE THE BEST ONE
            </h1>
            <div className={classes.mountain}></div>
            <h2 className={classes.description}>
                Customize your van to fit your needs and lifestyle. Travel
                without schedules or expensive reservations and feel as comfort
                as home.
            </h2>
        </div>
    );
};

export default Header;
