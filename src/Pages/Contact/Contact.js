import React from "react";
import classes from "./Contact.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import Cta from "../../components/Cta/Cta";
import thistles from "../../Assests/optimized/banner-contact.jpg";

const Contact = (props) => {
    return (
        <div className={classes.container}>
            <Header
                background={thistles}
                alt="thistles in the field"
                flag="CONTACT"
                title="We are here to help on your Journey"
            ></Header>
            <Cta></Cta>
        </div>
    );
};

export default Contact;
