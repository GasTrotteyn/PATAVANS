import React from "react";
//import classes from "./Layout.module.css";
import Header from "../containers/Header/Header";
import Carousel from "../containers/Carousel/Carousel";
import RightPiece from "../components/Pieces/RightPiece/RightPiece";
import LeftPiece from "../components/Pieces/LeftPiece/LeftPiece";
import window from "../Assests/optimized/img-home-about.jpg";
import ConversionOptions from "../containers/ConversionsOptions/ConversionsOptions";
import Video from "../components/Video/Video";
import ceramics from "../Assests/optimized/ceramic-main1.png";
import ceramicIcon from "../Assests/optimized/bg-icon-decor.png";
import bedIcon from "../Assests/optimized/bg-icon-foot.png";
import bedExtension from "..//Assests/optimized/img-feature-bedextension3.png";
import HomeGallery from "../containers/Gallery/HomeGallery/HomeGallery";
import Faqs from "../containers/Faqs/Faqs";
import Testimonials from "../containers/Testimonials/Testimonials";
import Iframe from "../components/UI/Iframe/Iframe";
import IconHomeSection from "./IconsHome/IconsHomeSection";
import Partners from "../containers/Partners/Partners";
import Footer from "../containers/Footer/Footer";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <Carousel></Carousel>
            <RightPiece
                flag="WHAT WE DO"
                title="We just build your dream"
                paragraph1="Van conversions, uniquely designed and built using sustainably sourced wood, ceramics, metal, and old world craftsmanship."
                srcPhoto={window}
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
            <Faqs></Faqs>
            <Testimonials></Testimonials>
            <IconHomeSection></IconHomeSection>
            <Iframe></Iframe>
            <Partners></Partners>
            <Footer></Footer>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </React.Fragment>
    );
};

export default Layout;
