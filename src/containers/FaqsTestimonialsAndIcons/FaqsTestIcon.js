import React from "react";
import classes from "./FaqsTestIcon.module.css";
import Faqs from "./Faqs/Faqs";
import Testimonials from "./Testimonials/Testimonials";
import IconSection from "../../components/IconsSection/IconsSection";
import iconClock from "../../Assests/optimized/icon-clock.svg";
import iconShield from "../../Assests/optimized/icon-shield.svg";
import iconSolarPanel from "../../Assests/optimized/icon-solarpanel.svg";
import iconUmbrella from "../../Assests/optimized/icon-umbrella.svg";

const FaqsTestIcon = (props) => {
    const icons = [
        {
            id: 1,
            title: "Fast Conversion",
            subtitle: "2 weeks basics 5 weeks full*",
            src: iconClock,
        },
        {
            id: 2,
            title: "Feel Safe",
            subtitle: "1 year warranty",
            src: iconShield,
        },
        {
            id: 3,
            title: "Off-grid solar power",
            subtitle: "from 300 watts onwards",
            src: iconSolarPanel,
        },
        {
            id: 4,
            title: "Moisture Free",
            subtitle: "With the best quality",
            src: iconUmbrella,
        },
    ];

    return (
        <div className={classes.container}>
            <Faqs></Faqs>
            <div className={classes.testIcons}>
                <Testimonials></Testimonials>
                <IconSection payload={icons}></IconSection>
            </div>
        </div>
    );
};

export default FaqsTestIcon;
