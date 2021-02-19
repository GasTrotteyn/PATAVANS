import React from "react";
//import classes from "./Layout.module.css";
import Partners from "../containers/Partners/Partners";
import Footer from "../containers/Footer/Footer";

const Layout = (props) => {
    return (
        <React.Fragment>
            {props.children}
            <Partners></Partners>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Layout;
