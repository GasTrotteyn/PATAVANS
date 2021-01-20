import React from "react";
import classes from "./Carousel.module.css";
import Slides from "../../components/UI/Slides/Slides";
import van1 from "../../Assests/slide1.jpg";
import van2 from "../../Assests/van2.jpg";
import van3 from "../../Assests/van3.jpg";

const Carousel = (props) => {
    return (
        <div className={classes.container}>
            <Slides
                payload={[
                    { id: 1, photo: van1, alt: "van 1" },
                    { id: 2, photo: van2, alt: "van 2" },
                    { id: 3, photo: van3, alt: "van 3" },
                ]}
                time={5000}
                type={"images"}
            ></Slides>
        </div>
    );
};

export default Carousel;
