import React from "react";
import classes from "./Footer.module.css";
import footerBrand from "../../Assests/optimized/brand-footer.svg";
import iconFacebook from "../../Assests/optimized/icon-facebook.svg";
import iconInstagram from "../../Assests/optimized/icon-instagram.svg";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
    const navItems = [
        { title: "Conversion Kits", path: "/conversions" },
        { title: "Gallery", path: "/gallery" },
        { title: "About Us", path: "/aboutUs" },
        { title: "FAQ", path: "/#faqs" },
        { title: "Contact us", path: "/contact" },
    ];

    const content = navItems.map((item) => {
        return (
            <li key={item.title}>
                <NavLink to={item.path} activeClassName={classes.active}>
                    {item.title}
                </NavLink>
            </li>
        );
    });

    return (
        <div className={classes.container}>
            <div className={classes.gradient}></div>
            <div className={classes.forest}></div>
            <div className={classes.brandMediaLegalMobile}>
                <img
                    className={classes.footerBrand}
                    src={footerBrand}
                    alt={"Brand"}
                ></img>
                <h2 className={classes.join}>Join us</h2>
                <div className={classes.socialMedia}>
                    <div className={classes.iconContainer}>
                        <img
                            src={iconFacebook}
                            className={classes.icon}
                            alt={"Facebook icon"}
                        ></img>
                    </div>
                    <div className={classes.iconContainer}>
                        <img
                            src={iconInstagram}
                            className={classes.icon}
                            alt={"Instagram icon"}
                        ></img>
                    </div>
                </div>
                <p className={classes.legal}>
                    © Copiright 2021 - PataVans, Boulder, CO - All rights
                    reserved
                </p>
            </div>
            <div className={classes.brandMediaLegalDesktop}>
                <img
                    className={classes.footerBrand}
                    src={footerBrand}
                    alt={"Brand"}
                ></img>
                <div className={classes.menuLegal}>
                    <ul className={classes.menu}>
                        {content}
                        {/* <a href={"#faqs"}>faqs</a> */}
                    </ul>

                    <p className={classes.legal}>
                        © Copiright 2021 - PataVans, Boulder, CO - All rights
                        reserved
                    </p>
                </div>
                <div className={classes.socialMedia}>
                    <h2 className={classes.join}>Join us</h2>
                    <div className={classes.iconContainer}>
                        <img
                            src={iconFacebook}
                            className={classes.icon}
                            alt={"Facebook icon"}
                        ></img>
                    </div>
                    <div className={classes.iconContainer}>
                        <img
                            src={iconInstagram}
                            className={classes.icon}
                            alt={"Instagram icon"}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
