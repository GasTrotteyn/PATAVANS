import React from "react";
import classes from "./FullKit.module.css";
import IconSection from "../../../components/IconsSection/IconsSection";
import iconClock from "../../../Assests/optimized/icon-clock.svg";
import iconSolarPanel from "../../../Assests/optimized/icon-solarpanel.svg";
import iconStove from "../../../Assests/optimized/icon-stove.svg";
import shower from "../../../Assests/optimized/icon-shower.svg";
import table from "../../../Assests/optimized/icon-table.svg";

import RightPiece from "../../../components/Pieces/RightPiece/RightPiece";
import iconCaravan from "../../../Assests/optimized/bg-icon-caravan.png";
import imgFullConversion from "../../../Assests/optimized/img-full-conversion.png";

import LeftPiece from "../../../components/Pieces/LeftPiece/LeftPiece";
import iconKitchen from "../../../Assests/optimized/bg-icon-kitchen.png";
import imgFullConversion2 from "../../../Assests/optimized/img-full-conversion2.png";
import iconDuck from "../../../Assests/optimized/bg-icon-duck.png";
import imgFullConversion3 from "../../../Assests/optimized/img-full-conversion3.png";

import iconInterior from "../../../Assests/optimized/icon-interior.svg";
import iconShower from "../../../Assests/optimized/icon-shower.svg";
import iconExterior from "../../../Assests/optimized/icon-exterior.svg";
import iconStove2 from "../../../Assests/optimized/icon-stove2.svg";

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
            src: iconStove,
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
            src: table,
        },
    ];

    const icons2 = [
        {
            id: 1,
            title: "Interior",
            subtitles: [
                "Knobs/Latches",
                "2 Cabinets",
                "Table",
                "Bed Frame",
                "Custom Mattress",
                "3 underbed Drawers",
            ],
            src: iconInterior,
        },
        {
            id: 2,
            title: "Kitchen",
            subtitles: [
                "2 Burner Stove",
                "Fridge",
                "Hardwood countertop",
                "Artisan Tiles",
                "Sink & faucet",
            ],
            src: iconStove2,
        },
        {
            id: 3,
            title: "Bathroom",
            subtitles: [
                "Shower seat",
                "Water Pump",
                "Water Tank",
                "Porta Potty",
                "Grey water tank",
            ],
            src: iconShower,
        },
        {
            id: 4,
            title: "Extras",
            subtitles: [
                "Propane Instant Water Heater",
                "Websato space Heater",
                "Propane System",
                "2 Swivel Bases for Chairs",
                "1000W Inverter",
            ],
            src: iconExterior,
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
            <RightPiece
                flag="FULL CONVERSION PACKAGE"
                title="Travel with the comforts of home"
                srcIcon={iconCaravan}
                altIcon="van traveling"
                paragraph1="Our Full Custom Van Conversion combines the basic conversion paskage with all recommended add-onn accessories, to make your custom van the perfect fit."
                paragraph2="Our Full Custom Van Conversion combines the basic conversion paskage with all recommended add-onn accessories, to make your custom van the perfect fit."
                srcPhoto={imgFullConversion}
                altPhoto="interior of a van"
                noButton
            ></RightPiece>
            <LeftPiece
                flag="FULL KITCHEN"
                title="Please, change this title because it doesn't say anything."
                srcIcon={iconKitchen}
                altIcon="kitche icon"
                paragraph1="OJO; OJO; OJO; !!!!!!Using three 100 Watt solar panels we harness the power of the sun to outfit your van with electricity."
                paragraph2="After panels charge your two insulated batteries you can run your LED lighting, switches and USB/cigar outlets completely fossil fuel free."
                srcPhoto={imgFullConversion2}
                altPhoto="complete kitchen"
                noButton
            ></LeftPiece>
            <RightPiece
                flag="BATHROOM"
                title="Heat water and full seat toilet"
                srcIcon={iconDuck}
                altIcon="Rubber duck icon"
                paragraph1=" OJO, OJO, OJO!!!!!!  No need to worry if you dirt follows you in after your adventure, your laminate flooring will be easy to clean."
                paragraph2=" OJO, OJO, OJO!!!!!!  No need to worry if you dirt follows you in after your adventure, your laminate flooring will be easy to clean."
                srcPhoto={imgFullConversion3}
                altPhoto="Shower seat"
                btnMessage={"View Video"}
                path={"/video-shower"}
                buttonForVideo
            ></RightPiece>
            <IconSection
                withBackground
                oneLine
                title={"What a full conversion includes"}
                subtitle={"Everithing in your basic conversion, plus:"}
                payload={icons2}
            ></IconSection>
        </div>
    );
};

export default BasicKit;
