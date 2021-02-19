import React from "react";
import classes from "./HeaderHome.module.css";
import Nav from "../../Navigation/Nav/Nav";
import sky from "../../../Assests/optimized/bg-sky.jpg";
import lagoon from "../../../Assests/optimized/banner-about.jpg";

const Header = (props) => {
    let url = sky;

    if (props.background === "2") {
        url = lagoon;
    }

    return (
        <div className={classes.container}>
            <Nav></Nav>
            <div
                style={{
                    backgroundImage: "url(" + url + ")",
                }}
                className={classes.sky}
            ></div>
            <h1
                style={{
                    fontFamily: "Gilroy-Bold ☞",
                    fontWeight: "normal",
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
