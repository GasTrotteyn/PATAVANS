import React, { useState } from "react";
import classes from "./PreConversion.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import wind from "../../Assests/optimized/banner-form.jpg";
import { checkValidity } from "../../shared/utilities";
// import axios from "axios";

// axios.defaults.headers.post["sorcho"] = null;

const Contact = (props) => {
    const [data, setData] = useState({
        form: {
            firstName: {
                value: "",
                valid: false,
                validation: {
                    required: true,
                },
            },
            lastName: {
                value: "",
                valid: true,
                validation: { required: false },
            },
            email: {
                value: "",
                valid: false,
                validation: {
                    required: true,
                    isEmail: true,
                },
            },
            tel: {
                value: "",
                valid: true,
                validation: { required: false },
            },
            haveVan: {
                value: false,
                valid: true,
                validation: { required: false },
            },
            vanDetails: {
                value: "",
                valid: true,
                validation: { required: false },
            },
            convertionOption: {
                value: "basic",
                valid: true,
                validation: {
                    required: true,
                },
            },
            idealDate: {
                value: "",
                valid: true,
                validation: { required: false },
            },
            primaryUse: {
                value: "",
                valid: false,
                validation: {
                    required: true,
                },
            },
            message: {
                value: "",
                valid: true,
                validation: { required: false },
            },
        },
        formIsValid: false,
    });

    const inputChangeHandler = (event, id) => {
        // manage the values
        let formModified = { ...data };
        let elementModified = { ...formModified.form[id] };
        elementModified.value = event.target.value;

        //check validity of the imput that is changing
        elementModified.valid = checkValidity(
            formModified.form[id].value,
            formModified.form[id].validation
        );
        //console.log(elementModified.valid);
        formModified.form[id] = elementModified;

        //set the validity of the entire form
        let formIsValid = true;
        for (let identifier in formModified.form) {
            formIsValid = formModified.form[identifier].valid && formIsValid;
        }
        formModified.formIsValid = formIsValid;
        console.log(formIsValid);

        // update the state
        setData(formModified);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (data.formIsValid) {
            let form = { ...data };
            let formString = JSON.stringify(form);
            console.log(formString);
            fetch("http://dummy.restapiexample.com/api/v1/create", {
                method: "POST",
                body: formString,
            })
                .then((resp) => {
                    let mostrable = resp.json();
                    return mostrable;
                })
                .then((resp) => console.log(resp))
                .catch((error) => {
                    console.log(error);
                });
        } else {
            alert("some fields are required");
        }
    };

    let classesArrayForButton = [
        classes.button,
        data.formIsValid ? null : classes.alertButton,
    ].join(" ");

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
                            placeholder="First Name *"
                            onChange={(event) => {
                                inputChangeHandler(event, "firstName");
                            }}
                            value={data.form.firstName.value}
                        ></input>
                        <input
                            placeholder="Last Name"
                            onChange={(event) => {
                                inputChangeHandler(event, "lastName");
                            }}
                            value={data.form.lastName.value}
                        ></input>
                        <input
                            className={
                                data.form.email.valid
                                    ? null
                                    : classes.mailInvalid
                            }
                            placeholder="E-mail *"
                            onChange={(event) => {
                                inputChangeHandler(event, "email");
                            }}
                            value={data.form.email.value}
                        ></input>
                        <input
                            placeholder="Phone"
                            onChange={(event) => {
                                inputChangeHandler(event, "tel");
                            }}
                            value={data.form.tel.value}
                        ></input>
                        <div>
                            <p>Have you already purchased your Van?</p>
                            <div className={classes.radioContainer}>
                                <label htmlFor="yes" className={classes.radio}>
                                    <input
                                        type="radio"
                                        id="yes"
                                        name="have"
                                        value={true}
                                        onChange={(event) => {
                                            inputChangeHandler(
                                                event,
                                                "haveVan"
                                            );
                                        }}
                                    ></input>
                                    Yes
                                </label>

                                <label htmlFor="no" className={classes.radio}>
                                    <input
                                        type="radio"
                                        id="no"
                                        name="have"
                                        value={false}
                                        onChange={(event) => {
                                            inputChangeHandler(
                                                event,
                                                "haveVan"
                                            );
                                        }}
                                    ></input>
                                    No
                                </label>
                            </div>
                        </div>
                        <input
                            placeholder="Year, make and model of your Van"
                            onChange={(event) => {
                                inputChangeHandler(event, "vanDetails");
                            }}
                            value={data.form.vanDetails.value}
                        ></input>
                        <label htmlFor="option" className={classes.select}>
                            <p> Select an option of Van conversion</p>
                            <select
                                id="option"
                                onChange={(event) => {
                                    inputChangeHandler(
                                        event,
                                        "convertionOption"
                                    );
                                }}
                            >
                                <option value="null">Select</option>
                                <option value="basic">Basic Conversion</option>
                                <option value="full">Full Conversion</option>
                            </select>
                        </label>
                        <label className={classes.select}>
                            <p>-Ideal start date for your conversion-</p>
                            <input
                                type="date"
                                onChange={(event) => {
                                    inputChangeHandler(event, "idealDate");
                                }}
                                value={data.form.idealDate.value}
                            ></input>
                        </label>
                        <textarea
                            className={classes.textArea}
                            placeholder="What is the primary use for this van? (i.e. weekend camping, work vehicle, full-time residence, etc.) *"
                            onChange={(event) => {
                                inputChangeHandler(event, "primaryUse");
                            }}
                            value={data.form.primaryUse.value}
                        ></textarea>
                        <textarea
                            className={classes.textArea}
                            placeholder="Do you have any question for Pata?"
                            onChange={(event) => {
                                inputChangeHandler(event, "message");
                            }}
                            value={data.form.message.value}
                        ></textarea>
                        <p className={classes.note}>
                            Thank you for the information! Chaeck your email for
                            a message from our team with the next step. If you
                            asked specific question please allow 1-2 business
                            days for us to get back to you with your answer!
                        </p>
                        <button className={classesArrayForButton}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
