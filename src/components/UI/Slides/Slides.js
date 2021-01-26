import React, { useCallback, useEffect, useState } from "react";
import Indicator from "./Indicator/Indicator";
import classes from "./Slides.module.css";
import leftArrowWhite from "../../../Assests/optimized/arrow-left-w.svg";
import rightArrowWhite from "../../../Assests/optimized/arrow-right-w.svg";
import leftArrow from "../../../Assests/optimized/arrow-left.svg";
import rightArrow from "../../../Assests/optimized/arrow-right.svg";

const Slides = (props) => {
    const { payload, time, type } = props;
    const [counter, setCounter] = useState(1);
    const [back, setBack] = useState(null);

    const onForward = useCallback(() => {
        if (counter < payload.length) {
            setCounter((prev) => prev + 1);
            setBack(null);
        } else {
            setCounter(1);
            setBack(null);
        }
    }, [counter, payload]);

    const onBack = () => {
        if (counter !== 1) {
            setCounter((prev) => prev - 1);
            setBack(counter - 1);
        } else {
            setCounter(payload.length);
            setBack(payload.length);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            onForward();
            setBack(null);
        }, time);
        return () => {
            clearTimeout(timer);
        };
    }, [onForward, time]);

    const getClasses = (id) => {
        if (time === 5000) {
            let mainClass;
            switch (type) {
                case "images":
                    mainClass = classes.photo;
                    break;
                case "texts":
                    mainClass = classes.text;
                    break;
                case "svg":
                    mainClass = classes.svg;
                    break;
                default:
                    console.log("Wrong value of type!");
            }
            return [
                mainClass,
                counter === id ? classes.selected5000 : null,
                back === id ? classes.back5000 : null,
            ].join(" ");
        }
        if (time === 15000) {
            let mainClass;
            switch (type) {
                case "images":
                    mainClass = classes.photo;
                    break;
                case "texts":
                    mainClass = classes.text;
                    break;
                case "svg":
                    mainClass = classes.svg;
                    break;
                default:
                    console.log("Wrong value of type!");
            }
            return [
                mainClass,
                counter === id ? classes.selected15000 : null,
                back === id ? classes.back15000 : null,
            ].join(" ");
        }
    };

    let content;

    switch (type) {
        case "images":
            content = payload.map((img) => {
                return (
                    <img
                        key={img.id}
                        className={getClasses(img.id)}
                        src={img.photo}
                        alt={img.alt}
                    ></img>
                );
            });
            break;
        case "texts":
            content = payload.map((txt) => {
                const signature =
                    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + txt.signature;
                return (
                    <div key={txt.id} className={getClasses(txt.id)}>
                        <p className={classes.quote}>{txt.content}</p>
                        <p className={classes.signature}> {signature}</p>
                    </div>
                );
            });
            break;
        case "svg":
            content = payload.map((svg) => {
                return (
                    <img
                        key={svg.id}
                        className={getClasses(svg.id)}
                        src={svg.src}
                        alt={svg.alt}
                    ></img>
                );
            });
            break;
        default:
            content = <p>Wrong type of Slides!</p>;
    }

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.controls}>
                    <div className={classes.control} onClick={onBack}>
                        <img
                            src={type === "svg" ? leftArrow : leftArrowWhite}
                            alt={"left arrow"}
                        ></img>
                    </div>
                    <div className={classes.control} onClick={onForward}>
                        <img
                            src={type === "svg" ? rightArrow : rightArrowWhite}
                            alt={"left arrow"}
                        ></img>
                    </div>
                </div>
                {content}
                <Indicator
                    type={type}
                    selected={counter}
                    payload={payload}
                ></Indicator>
            </div>
        </React.Fragment>
    );
};

export default Slides;
