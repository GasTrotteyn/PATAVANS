import React from "react";
import classes from "./Indicator.module.css";

const Indicator = (props) => {
    const { selected } = props;

    let select = `${classes.bubble}+' '+ ${classes.selected}`;
    return (
        <div className={classes.container}>
            <div className={selected === 1 ? select : classes.bubble}></div>
            <div className={selected === 2 ? select : classes.bubble}></div>
            <div className={selected === 3 ? select : classes.bubble}></div>
        </div>
    );
};

export default Indicator;
