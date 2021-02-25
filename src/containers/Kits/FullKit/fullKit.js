import React from "react";
import classes from "./FullKit.module.css";
import IconSection from "../../../components/IconsSection/IconsSection";
import iconClock from "../../../Assests/optimized/icon-clock.svg";
import iconSolarPanel from "../../../Assests/optimized/icon-solarpanel.svg";
import stove from "../../../Assests/optimized/icon-stove.svg";
import shower from "../../../Assests/optimized/icon-shower.svg";

import RightPiece from "../../../components/Pieces/RightPiece/RightPiece";

import LeftPiece from "../../../components/Pieces/LeftPiece/LeftPiece";

import iconInterior from "../../../Assests/optimized/icon-interior.svg";
import iconExterior from "../../../Assests/optimized/icon-exterior.svg";

import MoreAdds from "../../../components/MoreAdds/MoreAdds";

const BasicKit = (props) => {
    const { clicked } = props;

    const icons1 = [
        {
            id: 1,
            title: "Fast Conversion",
            subtitles: ["4-5 weeks"],
            src: iconClock,
        },
        {
            id: 2,
            title: "Energy & heater",
            subtitles: ["Propane & solar system"],
            src: iconSolarPanel,
        },
        {
            id: 3,
            title: "Kitchen",
            subtitles: ["Stove, fridge and sink"],
            src: stove,
        },
        {
            id: 4,
            title: "Bathroom",
            subtitles: ["Shower & Water Tank"],
            src: shower,
        },
        {
            id: 5,
            title: "Full interior",
            subtitles: ["Cabinets & Table"],
            src: shower,
        },
    ];

    return (
        <div className={classes.container}>
            <div className={classes.kitSelector}>
                <div className={classes.buttons}>
                    <div className={classes.buttonGrey} onClick={clicked}>
                        Basic Conversion
                    </div>
                    <div className={classes.title}>Full Conversion</div>
                </div>
            </div>
            <IconSection payload={icons1} oneLine></IconSection>
        </div>
    );
};

export default BasicKit;
