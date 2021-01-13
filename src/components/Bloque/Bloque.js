import React from "react";
import classes from "./Bloque.module.css";
import Button from "../UI/Button/Button";

const Bloque = (props) => {
    return (
        <article className={classes.container}>
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
            <p>{props.paragraph1}</p>

            <p>{props.paragraph2}</p>
            <Button onClick={props.onClick}>about us</Button>
            <img
                className={classes.photo}
                src={props.srcPhoto}
                alt={props.altPhoto}
            ></img>
        </article>
    );
};

export default Bloque;
