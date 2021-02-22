import React from "react";
import classes from "./Button.module.css";
import arrowRight from "../../../Assests/optimized/icon-arrow2.svg";
import arrowRightWhite from "../../../Assests/optimized/icon-arrow-white.svg";
import { Link } from "react-router-dom";

const Button = (props) => {
    const { transparent, path, children } = props;
    const arrowForTransparent = (
        <div>
            <img
                className={classes.arrowForTransparentGrey}
                src={arrowRight}
                alt="arrow right"
            ></img>
            <img
                className={classes.arrowForTransparentWhite}
                src={arrowRightWhite}
                alt="arrow right"
            ></img>
        </div>
    );

    let arrow = (
        <img className={classes.arrow} src={arrowRight} alt="arrow right"></img>
    );

    if (transparent) {
        arrow = arrowForTransparent;
    }

    const classesArray = [
        classes.Button,
        transparent ? classes.transparent : null,
    ].join(" ");

    return (
        <div className={classesArray}>
            <Link to={path}>
                {children}
                {arrow}
            </Link>
        </div>
    );
};

export default Button;
