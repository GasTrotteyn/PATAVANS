import React, { useState } from "react";
import classes from "./Contact.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import thistles from "../../Assests/optimized/banner-contact.jpg";
import { checkValidity } from "../../shared/utilities";
// import axios from "axios";

// axios.defaults.headers.post["sorcho"] = null;

const Contact = (props) => {
    const [data, setData] = useState({
        form: {
            name: {
                value: "",
                valid: false,
                validation: {
                    required: true,
                },
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
                validation: {
                    required: false,
                },
            },
            message: {
                value: "",
                valid: false,
                validation: {
                    required: true,
                },
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
        //console.log(formModified[id]);

        //set the validity of the entire form
        let formIsValid = true;
        for (let identifier in formModified.form) {
            formIsValid = formModified.form[identifier].valid && formIsValid;
        }
        formModified.formIsValid = formIsValid;

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
                background={thistles}
                alt="thistles in the field"
                flag="CONTACT"
                title="We are here to help on your Journey"
            ></Header>
            <div className={classes.dataSection}>
                <div className={classes.ourInfo}>
                    <h4>CONTACT US</h4>
                    <h2>We are in Denver's area</h2>
                    <p>
                        Please contact us with any questions about building your
                        custom van conversion, and start living your dreamed van
                        life!
                    </p>

                    <div className={classes.ourData}>
                        <p>
                            Phone: <br></br> E-mail: <br></br>Facebook:{" "}
                            <br></br>Instagram:
                        </p>

                        <p className={classes.strongs}>
                            <strong>9999-9999-999</strong>
                            <br></br>
                            <strong>patavansboulder@gmail.com</strong>
                            <br></br>
                            <strong>@patavansboulder</strong>
                            <br></br>
                            <strong>@patavans</strong>
                        </p>
                    </div>
                </div>
                <div className={classes.yourInfo}>
                    <h4>WRITE US</h4>
                    <form onSubmit={submitHandler}>
                        <input
                            placeholder="Name & lastname *"
                            onChange={(event) => {
                                inputChangeHandler(event, "name");
                            }}
                            value={data.form.name.value}
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
                            placeholder="Phone *"
                            onChange={(event) => {
                                inputChangeHandler(event, "tel");
                            }}
                            value={data.form.tel.value}
                        ></input>
                        <textarea
                            className={classes.textArea}
                            placeholder="Message *"
                            onChange={(event) => {
                                inputChangeHandler(event, "message");
                            }}
                            value={data.form.message.value}
                        ></textarea>
                        <button className={classesArrayForButton}>Send</button>
                    </form>
                </div>
            </div>
            <iframe
                className={classes.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.1716847044777!2d-105.21394518525203!3d40.004612488525225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf27166979755%3A0x625684d765d824ca!2sPataVans!5e0!3m2!1ses-419!2sar!4v1618835960346!5m2!1ses-419!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={"map"}
            ></iframe>
        </div>
    );
};

export default Contact;
