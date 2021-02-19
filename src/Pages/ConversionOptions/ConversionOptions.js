import React from "react";
import classes from "./ConversionOptions.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import Cta from "../../components/Cta/Cta";
import oldWest from "../../Assests/optimized/banner-conversion.jpg";

const Conversions = (props) => {
    return (
        <div className={classes.container}>
            <Header
                background={oldWest}
                alt="old west photo"
                flag="CONVERSION KITS"
                title="Coso del Comoera"
            ></Header>
            <Cta></Cta>
        </div>
    );
};

export default Conversions;
