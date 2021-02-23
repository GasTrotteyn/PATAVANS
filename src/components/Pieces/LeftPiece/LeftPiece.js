import React from "react";
import classes from "./LeftPiece.module.css";
import Button from "../../UI/Button/Button";

const Piece = (props) => {
    const {
        flag,
        title,
        srcIcon,
        altIcon,
        paragraph1,
        paragraph2,
        btnMessage,
        path,
        srcPhoto,
        altPhoto,
        noButton,
    } = props;

    return (
        <article className={classes.container}>
            <img
                className={classes.photoLeft}
                src={srcPhoto}
                alt={altPhoto}
            ></img>
            <div className={classes.text}>
                <div className={classes.titleStrip}>
                    <div>
                        <h4 className={classes.flag}>{flag}</h4>
                        <h2 className={classes.title}>{title}</h2>
                    </div>
                    <img
                        className={classes.icon}
                        src={srcIcon}
                        alt={altIcon}
                    ></img>
                </div>
                <p className={classes.paragraph}>{paragraph1}</p>
                <p className={classes.paragraph}>{paragraph2}</p>
                {noButton ? null : <Button path={path}>{btnMessage}</Button>}
            </div>
            <img className={classes.photo} src={srcPhoto} alt={altPhoto}></img>
        </article>
    );
};

export default Piece;
