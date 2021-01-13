import React from "react";
//import classes from "./Layout.module.css";
import Header from "./Header";
import Carousel from "./Carousel/Carousel";
import Iframe from "../components/UI/Iframe/Iframe";
import Bloque from "../components/Bloque/Bloque";
import ConversionOptions from "../containers/ConversionsBox/ConversionsBox";
import ceramics from "../Assests/ceramicos.jpg";
import ceramicIcon from "../Assests/ceramicIcon.png";
import bedIcon from "../Assests/bedIcon.png";
import bedExtension from "..//Assests/bedExtension.jpg";
import HomeGallery from "../containers/Gallery/HomeGallery/HomeGallery";
import Faqs from "../containers/Faqs/Faqs";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <Carousel></Carousel>
            <Iframe></Iframe>
            <Bloque
                flag="WHAT WE DO"
                title="UNA COSA DE LOCOS"
                paragraph1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                paragraph2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></Bloque>
            <ConversionOptions></ConversionOptions>
            <Bloque
                flag="MATERIALS"
                title="Custom ceramics tiles & knobs"
                srcIcon={ceramicIcon}
                altIcon="ceramic icon"
                paragraph1="Hand painted custom tiles and knobs from Guanajuato, Mexico"
                paragraph2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                srcPhoto={ceramics}
                altPhoto="handmade ceramics"
            ></Bloque>
            <Bloque
                flag="BED EXTENSION"
                title="Extend your beed to sleep more confortably"
                srcIcon={bedIcon}
                altIcon="bed icon"
                paragraph1="Fiberglass bed extensions will provide you with the extra inches needed to lay down and sleep comfortably in the width of your van."
                paragraph2="The universally sized bed estension blends perfectly with the exterior of any van while giving you the space you need."
                srcPhoto={bedExtension}
                altPhoto="bed extension"
            ></Bloque>
            <HomeGallery></HomeGallery>
            <Faqs></Faqs>
        </React.Fragment>
    );
};

export default Layout;
