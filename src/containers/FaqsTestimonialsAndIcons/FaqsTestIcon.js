import React from "react";
import classes from "./FaqsTestIcon.module.css";
import Faqs from "./Faqs/Faqs";
import Testimonials from "./Testimonials/Testimonials";
import IconHomeSection from "./IconsHome/IconsHomeSection";

const FaqsTestIcon = (props) => {
    return (
        <div className={classes.container}>
            <Faqs></Faqs>
            <div className={classes.testIcons}>
                <Testimonials></Testimonials>
                <IconHomeSection></IconHomeSection>
            </div>
        </div>
    );
};

export default FaqsTestIcon;
