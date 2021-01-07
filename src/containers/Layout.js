import React from "react";
//import classes from "./Layout.module.css";
import Header from "./Header";
import Carousel from "./Carousel/Carousel";
import Iframe from "../components/UI/Iframe/Iframe";
import Bloque from "../components/Bloque/Bloque";
import ConversionOptions from "../containers/ConversionsBox/ConversionsBox";
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
        </React.Fragment>
    );
};

export default Layout;
