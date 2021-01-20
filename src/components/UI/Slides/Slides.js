import React, { useCallback, useEffect, useState } from "react";
import Indicator from "./Indicator/Indicator";
import classes from "./Slides.module.css";
import leftArrowWhite from "../../../Assests/optimized/arrow-left-w.svg";
import rightArrowWhite from "../../../Assests/optimized/arrow-right-w.svg";

const Slides = (props) => {
    const { payload, time, type } = props;
    const [counter, setCounter] = useState(1);
    const [back, setBack] = useState(null);

    const onForward = useCallback(() => {
        if (counter < payload.length) {
            setCounter((prev) => prev + 1);
        } else {
            setCounter(1);
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
            return [
                type === "images" ? classes.photo : classes.text,
                counter === id ? classes.selected5000 : null,
                back === id ? classes.back5000 : null,
            ].join(" ");
        }
        if (time === 10000) {
            return [
                type === "images" ? classes.photo : classes.text,
                counter === id ? classes.selected10000 : null,
                back === id ? classes.back10000 : null,
            ].join(" ");
        }
    };

    let content;

    switch (type) {
        case "images":
            content = payload.map((img) => {
                return (
                    <img
                        className={getClasses(img.id)}
                        src={img.photo}
                        alt={img.alt}
                    ></img>
                );
            });
            break;
        case "texts":
            content = payload.map((txt) => {
                return <p className={getClasses(txt.id)}>{txt.content}</p>;
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
                        <img src={leftArrowWhite} alt={"left arrow"}></img>
                    </div>
                    <div className={classes.control} onClick={onForward}>
                        <img src={rightArrowWhite} alt={"left arrow"}></img>
                    </div>
                </div>
                {content}
                <Indicator selected={counter} images={payload}></Indicator>
            </div>
        </React.Fragment>
    );
};

export default Slides;
