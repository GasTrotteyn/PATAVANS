import React from "react";
import classes from "./HomeGallery.module.css";
import gal1 from "../../../Assests/gal1.jpg";
import gal2 from "../../../Assests/gal2.jpg";
import gal3 from "../../../Assests/gal3.jpg";
import gal4 from "../../../Assests/gal4.jpg";
import gal5 from "../../../Assests/gal5.jpg";
import gal6 from "../../../Assests/gal6.jpg";

const HomeGallery = (props) => {
    const photoList = [
        { src: gal1, alt: "gal1" },
        { src: gal2, alt: "gal2" },
        { src: gal3, alt: "gal3" },
        { src: gal4, alt: "gal4" },
        { src: gal5, alt: "gal5" },
        { src: gal6, alt: "gal6" },
    ];
    const content = photoList.map((photo) => (
        <img
            key={photo.alt}
            src={photo.src}
            alt={photo.alt}
            className={
                photo.alt === "gal1" || photo.alt === "gal6"
                    ? classes.longPhoto
                    : classes.photo
            }
        ></img>
    ));
    return (
        <div className={classes.container}>
            <div onClick={props.link} className={classes.link}>
                view full gallery
            </div>
            <div className={classes.photos}>{content}</div>
        </div>
    );
};

export default HomeGallery;
