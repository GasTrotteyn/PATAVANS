import React from "react";
import classes from "./AboutUs.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import Cta from "../../components/Cta/Cta";
import lagoon from "../../Assests/optimized/banner-about.jpg";

const About = (props) => {
    return (
        <div className={classes.container}>
            <Header
                background={lagoon}
                alt="lagoon at sunset"
                flag="ABOUT PATA"
                title="Know the legend"
            ></Header>
            <Cta></Cta>
        </div>
    );
};

export default About;
