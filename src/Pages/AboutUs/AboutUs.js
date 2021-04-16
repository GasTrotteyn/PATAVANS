import React from "react";
import classes from "./AboutUs.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import Cta from "../../components/Cta/Cta";
import lagoon from "../../Assests/optimized/banner-about.jpg";
import RightPiece from "../../components/Pieces/RightPiece/RightPiece";
import pataWorking from "../../Assests/optimized/img-about.png";

const About = (props) => {
    return (
        <div className={classes.container}>
            <Header
                background={lagoon}
                alt="lagoon at sunset"
                flag="ABOUT PATA"
                title="Know the legend"
            ></Header>
            <RightPiece
                flag="ABOUT ME"
                title="I'm PATA"
                paragraph1="Juan Manuel Trotteyn (aka ‘Pata’) was born and raised in Mendoza, Argentina. His father introduced him to mountaineering at a young age, but he quickly fell in love with sport climbing and started competing."
                paragraph2="At 18 years, he won Nationals and shortly after started route-setting for competitions. After his very first trip to Spain, he realized that’s where he wanted to live. For twelve years, Pata was based out of Cornudella de Montsant, Cataluña, the heart of Spain’s most stunning sport climbing. He became involved in the local bolting community, establishing new routes as rebolting the classics. Today, Pata lives in Boulder, CO and enjoys building custom van conversions, making other people’s dream of living in a van life come true. In his free time, Pata climbs on rock or flies his paraglider."
                srcPhoto={pataWorking}
                altPhoto="Pata working in a"
                noButton
            ></RightPiece>

            <Cta></Cta>
        </div>
    );
};

export default About;
