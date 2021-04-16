import React, { useState } from "react";
import classes from "./Contact.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import thistles from "../../Assests/optimized/banner-contact.jpg";
import axios from "axios";

const Contact = (props) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        tel: "",
        message: "",
    });

    const inputChangeHandler = (event, id) => {
        // event.preventDefault();
        let formModified = { ...data };
        formModified[id] = event.target.value;
        setData(formModified);
        console.log(data[id]);
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
                            placeholder="Name & lastname"
                            onChange={(event) => {
                                inputChangeHandler(event, "name");
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
                        <textarea
                            placeholder="Message"
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
