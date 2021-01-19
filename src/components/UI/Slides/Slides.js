import React, { useCallback, useEffect, useState } from "react";
import Indicator from "./Indicator/Indicator";
import classes from "./Slides.module.css";
import leftArrowWhite from "../../../Assests/optimized/arrow-left-w.svg";
import rightArrowWhite from "../../../Assests/optimized/arrow-right-w.svg";

const Slides = (props) => {
    const { images, time } = props;
    const [counter, setCounter] = useState(1);
    const [back, setBack] = useState(null);

    const onForward = useCallback(() => {
        if (counter < images.length) {
            setCounter((prev) => prev + 1);
        } else {
            setCounter(1);
        }
    }, [counter, images]);

    const onBack = () => {
        if (counter !== 1) {
            setCounter((prev) => prev - 1);
            setBack(counter - 1);
        } else {
            setCounter(images.length);
            setBack(images.length);
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
        return [
            classes.photo,
            counter === id ? classes.selected5000 : null,
            back === id ? classes.back5000 : null,
        ].join(" ");
    };

    let content = images.map((img) => {
        return (
            <img
                className={getClasses(img.id)}
                src={img.photo}
                alt={img.alt}
            ></img>
        );
    });

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
                <Indicator selected={counter} images={images}></Indicator>
            </div>
        </React.Fragment>
    );
};

export default Slides;
