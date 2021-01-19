import React from "react";
import classes from "./Button.module.css";
import arrowRight from "../../../Assests/optimized/icon-arrow2.svg";

const Button = (props) => {
    return (
        <div className={classes.Button} onClick={props.onClick}>
            {props.children}
            <img
                className={classes.arrow}
                src={arrowRight}
                alt="arrow right"
            ></img>
        </div>
    );
};

export default Button;
