import React from "react";
import classes from "./Partners.module.css";
import Slides from "../../components/UI/Slides/Slides";
import Partner1 from "../../Assests/optimized/partner-fiamma.svg";
import Partner2 from "../../Assests/optimized/partner-orukayak.svg";
import Partner3 from "../../Assests/optimized/partner-pkysinc.svg";
import Partner4 from "../../Assests/optimized/partner-rhino-rack.svg";

const Partners = (props) => {
    const list = [
        { id: 1, src: Partner1, alt: "fiamma" },
        { id: 2, src: Partner2, alt: "orukayak" },
        { id: 3, src: Partner3, alt: "pkysinc" },
        { id: 4, src: Partner4, alt: "rino-rack" },
    ];
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>OUR PARTNERS</h2>
            <Slides payload={list} type={"svg"} time={5000}></Slides>
        </div>
    );
};

export default Partners;