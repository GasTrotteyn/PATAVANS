import React from "react";
//import classes from "./Layout.module.css";
import Header from "./Header";
import van1 from "../Assests/slide1.jpg";
import van2 from "../Assests/van2.jpg";
import van3 from "../Assests/van3.jpg";
import Slides from "../components/UI/Slides/Slides";
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
import review1 from "../Assests/optimized/review1.png";
import Iframe from "../components/UI/Iframe/Iframe";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <Slides
                images={[
                    { id: 1, photo: van1, alt: "van 1" },
                    { id: 2, photo: van2, alt: "van 2" },
                    { id: 3, photo: van3, alt: "van 3" },
                ]}
                time={5000}
            ></Slides>
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
            <Slides
                images={[
                    { id: 1, photo: review1, alt: "van 1" },
                    { id: 2, photo: van2, alt: "van 2" },
                    { id: 3, photo: van3, alt: "van 3" },
                ]}
                time={5000}
            ></Slides>
            <Iframe></Iframe>
        </React.Fragment>
    );
};

export default Layout;
