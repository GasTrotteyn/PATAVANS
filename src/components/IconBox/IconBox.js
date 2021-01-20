import React from "react";
import classes from "./IconBox.module.css";

const IconBox = (props) => {
    return (
        <div className={classes.container}>
            <img className={classes.icon} src={props.src} alt={props.alt}></img>
            <h4 className={classes.title}>{props.title}</h4>
            <p className={classes.subtitle}>{props.subtitle}</p>
        </div>
    );
};

export default IconBox;
