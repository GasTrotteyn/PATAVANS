import React from "react";
import classes from "./Footer.module.css";
import footerBrand from "../../Assests/optimized/brand-footer.svg";
import iconFacebook from "../../Assests/optimized/icon-facebook.svg";
import iconInstagram from "../../Assests/optimized/icon-instagram.svg";

const Footer = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.gradient}></div>
            <div className={classes.forest}></div>
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
                © Copiright 2021 - PataVans, Boulder, CO - All rights reserved
            </p>
        </div>
    );
};

export default Footer;
