import React from "react";
import classes from "./Button.module.css";
import arrowRight from "../../../Assests/optimized/icon-arrow2.svg";
import arrowRightWhite from "../../../Assests/optimized/icon-arrow-white.svg";

const Button = (props) => {
    const { transparent, onClick, children } = props;

    let arrow = arrowRight;
    const classesArray = [
        classes.Button,
        transparent ? classes.transparent : null,
    ].join(" ");
    if (transparent) {
        arrow = arrowRightWhite;
    }

    return (
        <div className={classesArray} onClick={onClick}>
            {children}
            <img className={classes.arrow} src={arrow} alt="arrow right"></img>
        </div>
    );
};

export default Button;
