import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <div className={classes.Button} onClick={props.onClick}>
            {props.children}
            <i className="fas fa-arrow-right"></i>
        </div>
    );
};

export default Button;
