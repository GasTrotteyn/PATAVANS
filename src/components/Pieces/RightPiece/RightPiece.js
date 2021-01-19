import React from "react";
import classes from "./RigthPiece.module.css";
import Button from "../../UI/Button/Button";

const Piece = (props) => {
    return (
        <article className={classes.container}>
            <div className={classes.text}>
                <div className={classes.titleStrip}>
                    <div>
                        <h4 className={classes.flag}>{props.flag}</h4>
                        <h2 className={classes.title}>{props.title}</h2>
                    </div>
                    <img
                        className={classes.icon}
                        src={props.srcIcon}
                        alt={props.altIcon}
                    ></img>
                </div>
                <p className={classes.paragraph}>{props.paragraph1}</p>
                <p className={classes.paragraph}>{props.paragraph2}</p>
                <Button onClick={props.onClick}>{props.btnMessage}</Button>
            </div>
            <img
                className={classes.photo}
                src={props.srcPhoto}
                alt={props.altPhoto}
            ></img>
        </article>
    );
};

export default Piece;
