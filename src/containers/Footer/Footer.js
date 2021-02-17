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
                        <li>
                            <a href={"https://www.google.com/"}>
                                Conversion kits
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.google.com/"}>Gallery</a>
                        </li>
                        <li>
                            <a href={"https://www.google.com/"}>About us</a>
                        </li>
                        <li>
                            <a href={"https://www.google.com/"}>FAQ</a>
                        </li>
                        <li>
                            <a href={"https://www.google.com/"}>Contact us</a>
                        </li>
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
