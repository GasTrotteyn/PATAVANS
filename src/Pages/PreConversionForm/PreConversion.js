import React, { useState } from "react";
import classes from "./PreConversion.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import wind from "../../Assests/optimized/banner-form.jpg";
import axios from "axios";

const Contact = (props) => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        haveVan: false,
        vanDetails: "",
        convertionOption: "basic",
        idealDate: "",
        primaryUse: "",
        message: "",
    });

    const inputChangeHandler = (event, id) => {
        // event.preventDefault();
        let formModified = { ...data };
        formModified[id] = event.target.value;
        setData(formModified);
        //console.log(data[id]);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        let newForm = { ...data };
        axios
            .post("https://jsonplaceholder.typicode.com/posts", newForm)
            .then((resp) => console.log(resp));
    };

    return (
        <div className={classes.container}>
            <Header
                background={wind}
                alt="plotted van"
                flag="PRE-CONVERSION QUESTIONNAIRE"
                title="Tell us about your dream Van"
            ></Header>
            <div className={classes.dataSection}>
                <div className={classes.ourInfo}>
                    <h4>CUSTOM VANS</h4>
                    <h2>Pre-Conversion Questionnaire.</h2>
                    <p>
                        We're excited to ger started building your van! Whether
                        it's just for weekend camping with the family, a work
                        van, or a full-time residence, we'll make a home
                        perfectly suited to your unique needs.
                    </p>
                </div>
                <div className={classes.yourInfo}>
                    <form onSubmit={submitHandler}>
                        <input
                            placeholder="First Name"
                            onChange={(event) => {
                                inputChangeHandler(event, "firstName");
                            }}
                            value={data.name}
                        ></input>
                        <input
                            placeholder="Last Name"
                            onChange={(event) => {
                                inputChangeHandler(event, "lastName");
                            }}
                            value={data.name}
                        ></input>
                        <input
                            placeholder="E-mail"
                            onChange={(event) => {
                                inputChangeHandler(event, "email");
                            }}
                            value={data.email}
                        ></input>
                        <input
                            placeholder="Phone"
                            onChange={(event) => {
                                inputChangeHandler(event, "tel");
                            }}
                            value={data.tel}
                        ></input>
                        <p>Have you already purchased your Van?</p>
                        <label htmlFor="yes">Yes</label>
                        <input
                            type="radio"
                            id="yes"
                            name="have"
                            value={true}
                            onChange={(event) => {
                                inputChangeHandler(event, "haveVan");
                            }}
                        ></input>
                        <label htmlFor="no">no</label>
                        <input
                            type="radio"
                            id="no"
                            name="have"
                            value={false}
                            onChange={(event) => {
                                inputChangeHandler(event, "haveVan");
                            }}
                        ></input>
                        <input
                            placeholder="Year, make and nodel of your Van"
                            onChange={(event) => {
                                inputChangeHandler(event, "vanDetails");
                            }}
                            value={data.vanDetails}
                        ></input>
                        <label htmlFor="option">
                            -Select an option of Van conversion -
                        </label>
                        <select
                            id="option"
                            onChange={(event) => {
                                inputChangeHandler(event, "convertionOption");
                            }}
                        >
                            <option value="basic">Basic Conversion</option>
                            <option value="full">Full Conversion</option>
                        </select>
                        <input
                            placeholder="-Ideal start date for your conversion-"
                            onChange={(event) => {
                                inputChangeHandler(event, "idealDate");
                            }}
                            value={data.idealDate}
                        ></input>
                        <textarea
                            className={classes.textArea}
                            placeholder="What is the primary use for this van? (i.e. weekend camping, work vehicle, full-time residence, etc.)*"
                            onChange={(event) => {
                                inputChangeHandler(event, "primaryUse");
                            }}
                            value={data.primaryUse}
                        ></textarea>
                        <textarea
                            className={classes.textArea}
                            placeholder="Do you have any question for Pata?"
                            onChange={(event) => {
                                inputChangeHandler(event, "message");
                            }}
                            value={data.message}
                        ></textarea>
                        <button className={classes.button}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
