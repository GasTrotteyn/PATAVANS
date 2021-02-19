import React from "react";
import HeaderHome from "../Headers/HeaderHome/HeaderHome";
import Carousel from "../Carousel/Carousel";
import RightPiece from "../../components/Pieces/RightPiece/RightPiece";
import LeftPiece from "../../components/Pieces/LeftPiece/LeftPiece";
import window from "../../Assests/optimized/img-home-about.jpg";
import ConversionOptions from "../ConversionsOptions/ConversionsOptions";
import Video from "../../components/Video/Video";
import ceramics from "../../Assests/optimized/ceramic-main4.png";
import ceramicIcon from "../../Assests/optimized/bg-icon-decor.png";
import bedIcon from "../../Assests/optimized/bg-icon-foot.png";
import bedExtension from "../../Assests/optimized/img-feature-bedextension3.png";
import HomeGallery from "../Gallery/HomeGallery/HomeGallery";
import FaqsTestIcon from "../FaqsTestimonialsAndIcons/FaqsTestIcon";
import Iframe from "../../components/UI/Iframe/Iframe";

const Home = (props) => {
    return (
        <React.Fragment>
            <HeaderHome></HeaderHome>
            <Carousel></Carousel>
            <RightPiece
                flag="WHAT WE DO"
                title="We just build your dream"
                paragraph1="Van conversions, uniquely designed and built using sustainably sourced wood, ceramics, metal, and old world craftsmanship."
                paragraph2="Van conversions, uniquely designed and built using sustainably sourced wood, ceramics, metal, and old world craftsmanship."
                srcPhoto={window}
                photoOnlyDesktop
                altPhoto="kitchen window with a river"
                btnMessage="about us"
            ></RightPiece>
            <Video></Video>
            <ConversionOptions></ConversionOptions>
            <LeftPiece
                flag="MATERIALS"
                title="Custom ceramics tiles & knobs"
                srcIcon={ceramicIcon}
                altIcon="ceramic icon"
                paragraph1="Hand painted custom tiles and knobs from Guanajuato, Mexico"
                paragraph2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                srcPhoto={ceramics}
                altPhoto="handmade ceramics"
                btnMessage="gallery"
            ></LeftPiece>
            <RightPiece
                flag="BED EXTENSION"
                title="Extend your beed to sleep more confortably"
                srcIcon={bedIcon}
                altIcon="bed icon"
                paragraph1="Fiberglass bed extensions will provide you with the extra inches needed to lay down and sleep comfortably in the width of your van."
                paragraph2="The universally sized bed estension blends perfectly with the exterior of any van while giving you the space you need."
                srcPhoto={bedExtension}
                altPhoto="bed extension"
                btnMessage="gallery"
            ></RightPiece>
            <HomeGallery></HomeGallery>
            <FaqsTestIcon></FaqsTestIcon>
            <Iframe></Iframe>
        </React.Fragment>
    );
};

export default Home;
