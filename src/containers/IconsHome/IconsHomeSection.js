import React from "react";
import classes from "./IconsHomeSection.module.css";
import iconClock from "../../Assests/optimized/icon-clock.svg";
import iconShield from "../../Assests/optimized/icon-shield.svg";
import iconSolarPanel from "../../Assests/optimized/icon-solarpanel.svg";
import iconUmbrella from "../../Assests/optimized/icon-umbrella.svg";
import IconBox from "../../components/IconBox/IconBox";

const IconSection = (props) => {
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

    const content = icons.map((icon) => {
        return (
            <IconBox
                key={icon.id}
                title={icon.title}
                src={icon.src}
                subtitle={icon.subtitle}
            ></IconBox>
        );
    });
    return <div className={classes.container}>{content}</div>;
};

export default IconSection;
