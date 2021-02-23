import React from "react";
import classes from "./BasicKit.module.css";
import IconSection from "../../../components/IconsSection/IconsSection";
import iconClock from "../../../Assests/optimized/icon-clock.svg";
import iconSolarPanel from "../../../Assests/optimized/icon-solarpanel.svg";
import iconVentilation from "../../../Assests/optimized/icon-ventilation.svg";
import iconFloor from "../../../Assests/optimized/icon-panels.svg";
import RightPiece from "../../../components/Pieces/RightPiece/RightPiece";
import iconPillow from "../../../Assests/optimized/bg-icon-pillow.png";
import interior from "../../../Assests/optimized/img-basic-conversion.png";

const BasicKit = (props) => {
    const { clicked } = props;
    const icons1 = [
        {
            id: 1,
            title: "Fast Conversion",
            subtitle: "2 weeks",
            src: iconClock,
        },
        {
            id: 2,
            title: "Solar Energy",
            subtitle: "300w solar panels",
            src: iconSolarPanel,
        },
        {
            id: 3,
            title: "Ventilation system",
            subtitle: "Two ceiling exhaust fans",
            src: iconVentilation,
        },
        {
            id: 4,
            title: "Laminate flooring",
            subtitle: "Easy to clean",
            src: iconFloor,
        },
    ];

    return (
        <div className={classes.container}>
            <div className={classes.kitSelector}>
                <div className={classes.buttons}>
                    <div className={classes.title}>Basic</div>
                    <div className={classes.buttonGrey} onClick={clicked}>
                        Full Conversion
                    </div>
                </div>
            </div>
            <IconSection payload={icons1}></IconSection>
            <RightPiece
                flag="BASIC CONVERSION PACKAGE"
                title="Just the essentials, practical and comfortable."
                srcIcon={iconPillow}
                altIcon="pillow icon"
                paragraph1="Fiberglass bed extensions will provide you with the extra inches needed to lay down and sleep comfortably in the width of your van."
                paragraph2="The universally sized bed estension blends perfectly with the exterior of any van while giving you the space you need."
                srcPhoto={interior}
                altPhoto="interior of a van"
                noButton
            ></RightPiece>
        </div>
    );
};

export default BasicKit;
