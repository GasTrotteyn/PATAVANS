import React from "react";
import classes from "./Indicator.module.css";

const Indicator = (props) => {
    const { selected, images } = props;
    const select = `${classes.bubble}+' '+ ${classes.selected}`;
    const content = images.map((element) => {
        return (
            <div
                className={selected === element.id ? select : classes.bubble}
            ></div>
        );
    });
    return <div className={classes.container}>{content}</div>;
};

export default Indicator;
