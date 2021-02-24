import React from "react";
import classes from "./IconBox.module.css";

const IconBox = (props) => {
    const { src, alt, title, subtitles } = props;

    const subtitlesToShow = subtitles.map((subtitle) => (
        <p className={classes.subtitle}>{subtitle}</p>
    ));

    return (
        <div className={classes.container}>
            <img className={classes.icon} src={src} alt={alt}></img>
            <h4 className={classes.title}>{title}</h4>
            {subtitlesToShow}
        </div>
    );
};

export default IconBox;
