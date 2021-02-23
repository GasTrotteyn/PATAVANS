import React from "react";
import classes from "./IconsSection.module.css";
import IconBox from "../IconBox/IconBox";

const IconSection = (props) => {
    const { payload } = props;

    const content = payload.map((icon) => {
        return (
            <IconBox
                key={icon.id}
                title={icon.title}
                src={icon.src}
                subtitle={icon.subtitle}
            ></IconBox>
        );
    });
    return <div className={classes.container}>{content}</div>;
};

export default IconSection;
