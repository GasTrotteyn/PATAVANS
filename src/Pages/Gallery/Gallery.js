import React from "react";
import classes from "./Gallery.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import Cta from "../../components/Cta/Cta";
import meadow from "../../Assests/optimized/banner-gallery.jpg";

const Gallery = (props) => {
    return (
        <div className={classes.container}>
            <Header
                background={meadow}
                alt="flowery meadow"
                flag="GALLERY"
                title="Enjoy the view"
            ></Header>
            <Cta></Cta>
        </div>
    );
};

export default Gallery;
