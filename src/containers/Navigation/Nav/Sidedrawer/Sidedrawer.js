import React from "react";
import classes from "./Sidedrawer.module.css";
import iconClose from "../../../../Assests/optimized/icon-closed-w.svg";
// import { NavLink } from "react-router-dom";

const SideDrawer = (props) => {
    const { show, clicked } = props;

    const navItems = [
        { title: "HOME", path: "/" },
        { title: "CONVERSION KITS", path: "/" },
        { title: "GALLERY", path: "/" },
        { title: "ABOUT US", path: "/" },
        { title: "CONTACT", path: "/" },
    ];

    const content = navItems.map((item) => {
        return (
            <li
                className={classes.navItem}
                onClick={clicked}
                style={{
                    fontFamily: "Gilroy-Bold ☞",
                    fontWeight: "light",
                }}
            >
                {/* <NavLink to={item.path} activeClassName={classes.active}> */}
                <a
                    style={{
                        fontFamily: "Gilroy-Bold ☞",
                        fontWeight: "light",
                    }}
                    href="https://www.google.com/"
                >
                    {item.title}
                </a>
                {/* </NavLink> */}
            </li>
        );
    });

    const classesArray = [classes.container, show ? classes.show : null].join(
        " "
    );

    return (
        <div className={classesArray} onClick={clicked}>
            <ul className={classes.navItems}>
                <li className={classes.navItem} onClick={clicked}>
                    <img src={iconClose} alt="icon close"></img>
                </li>
                {content}
            </ul>
        </div>
    );
};

export default SideDrawer;
