import React from "react";
import classes from "./Bloque.module.css";
import Button from "../UI/Button/Button";

const Bloque = (props) => {
    return (
        <article className={classes.container}>
            <h4>{props.flag}</h4>
            <h2>{props.title}</h2>
            <p>{props.paragraph1}</p>

            <p>{props.paragraph2}</p>
            <Button onClick={props.onClick}>about us</Button>
        </article>
    );
};

export default Bloque;
