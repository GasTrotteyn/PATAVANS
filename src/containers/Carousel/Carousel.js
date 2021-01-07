import React from "react";
import classes from "./Carousel.module.css";
import forest from "../../Assests/forest3.png";
import Slides from "../../components/UI/Slides/Slides";

const Carousel = (props) => {
    return (
        <div className={classes.container}>
            <img className={classes.forest} src={forest} alt="forest" />
            <Slides></Slides>
        </div>
    );
};

export default Carousel;
