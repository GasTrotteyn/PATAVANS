import React from "react";
import classes from "./Faq.module.css";

const Faq = (props) => {
    return (
        <div className={classes.container}>
            <h3 className={classes.question}>{props.question}</h3>
            <button className={classes.button} onClick={props.onClicked}>
                {props.clicked ? (
                    <i className="fas fa-times"></i>
                ) : (
                    <i className="fas fa-plus"></i>
                )}
            </button>
            <h6 className={classes.answer}>
                {props.clicked ? props.answer : null}
            </h6>
        </div>
    );
};

export default Faq;
