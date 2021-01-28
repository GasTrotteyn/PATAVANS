import React from "react";
import classes from "./Faq.module.css";
import iconPlus from "../../../Assests/optimized/icon-plus.svg";
import iconClose from "../../../Assests/optimized/icon-close.svg";

const Faq = (props) => {
    let answerToRender = null;
    if (props.clicked) {
        answerToRender = props.answer;
        if (props.answer2) {
            answerToRender = (
                <div>
                    <p className={classes.paragraph}>
                        {props.answer}{" "}
                        <a href="https://www.google.com/">{props.link1}</a>
                    </p>
                    <br></br>{" "}
                    <p className={classes.paragraph}>
                        {props.answer}{" "}
                        <a href="https://www.google.com/">{props.link2}</a>
                    </p>
                    <br></br>
                    <br></br>
                    <p className={classes.paragraph}>
                        {props.answer2}{" "}
                        <a href="https://www.google.com/">{props.link3}</a>
                    </p>
                </div>
            );
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.titleStrip}>
                <h3 className={classes.question} onClick={props.onClicked}>
                    {props.question}
                </h3>
                <div className={classes.button} onClick={props.onClicked}>
                    {props.clicked ? (
                        <img src={iconClose} alt="icon close"></img>
                    ) : (
                        <img src={iconPlus} alt="icon plus"></img>
                    )}
                </div>
            </div>
            <h6 className={classes.answer}>{answerToRender}</h6>
        </div>
    );
};

export default Faq;
