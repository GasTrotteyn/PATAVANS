import React from "react";
import classes from "./Video.module.css";
import source from "../../Assests/optimized/videoProvisorio.mp4";

const Video = (props) => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Van's life is the freedom</h2>
            <video className={classes.video} autoPlay loop muted playsinline>
                <source src={source} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;
