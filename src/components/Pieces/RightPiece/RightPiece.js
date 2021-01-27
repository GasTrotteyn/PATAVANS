import React from "react";
import classes from "./RigthPiece.module.css";
import Button from "../../UI/Button/Button";

const Piece = (props) => {
    const {
        flag,
        title,
        srcIcon,
        altIcon,
        paragraph1,
        paragraph2,
        onClick,
        btnMessage,
        srcPhoto,
        altPhoto,
        photoOnlyDesktop,
    } = props;
    return (
        <article className={classes.container}>
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
                <Button onClick={onClick}>{btnMessage}</Button>
            </div>
            {photoOnlyDesktop ? (
                <div className={classes.photoOnlyDesktop}></div>
            ) : (
                <img
                    className={classes.photo}
                    src={srcPhoto}
                    alt={altPhoto}
                ></img>
            )}
        </article>
    );
};

export default Piece;
