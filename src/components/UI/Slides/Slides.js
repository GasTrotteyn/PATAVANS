import React, { useCallback, useEffect, useState } from "react";
import Indicator from "./Indicator/Indicator";
import classes from "./Slides.module.css";
import van1 from "../../../Assests/van1.jpg";
import van2 from "../../../Assests/van2.jpg";
import van3 from "../../../Assests/van3.jpg";

const Slides = (props) => {
    const [counter, setCounter] = useState(1);
    const [back, setBack] = useState(null);

    const onForward = useCallback(() => {
        if (counter <= 2) {
            setCounter((prev) => prev + 1);
        } else {
            setCounter(1);
        }
    }, [counter]);

    const onBack = () => {
        if (counter >= 2) {
            setCounter((prev) => prev - 1);
            setBack(counter - 1);
        } else {
            setCounter(3);
            setBack(3);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            onForward();
            setBack(null);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [onForward]);

    const getClasses = (id) => {
        return [
            classes.photo,
            counter === id ? classes.selected : null,
            back === id ? classes.back : null,
        ].join(" ");
    };

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.controls}>
                    <div className={classes.control} onClick={onBack}>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className={classes.control} onClick={onForward}>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            <img className={getClasses(1)} src={van1} alt={"Van1"}></img>
            <img className={getClasses(2)} src={van2} alt={"Van2"}></img>
            <img className={getClasses(3)} src={van3} alt={"Van3"}></img>
            <Indicator selected={counter}></Indicator>
        </React.Fragment>
    );
};

export default Slides;
