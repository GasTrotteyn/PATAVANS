const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const data = require("./data");

const app = express();

app.use(bodyParser.json());

//This allow requests from the frontend
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://patavans1.web.app"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: data.user,
        pass: data.passWord,
    },
    tls: { rejectUnauthorized: false },
});

app.get("/", (req, res) => {
    res.send("hola mundo!");
});

app.post("/contact", (req, res) => {
    if (req.body.form.name.value) {
        const emailText =
            "Name: " +
            req.body.form.name.value +
            "\n" +
            "Email: " +
            req.body.form.email.value +
            "\n" +
            "Tel: " +
            req.body.form.tel.value +
            "\n" +
            "Message: " +
            req.body.form.message.value;

        const mailOptions = {
            from: data.user,
            to: "patavansboulder@gmail.com",
            subject: "Mail from Patavans web-site form",
            text: emailText,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        res.status(201);
        res.json({ emailText });
    } else {
        res.status(401);
    }
});

app.post("/preconversion", (req, res) => {
    if (req.body.form.firstName.value) {
        const emailText =
            "Firs Name: " +
            req.body.form.firstName.value +
            "\n" +
            "Last Name: " +
            req.body.form.lastName.value +
            "\n" +
            "Email: " +
            req.body.form.email.value +
            "\n" +
            "Tel: " +
            req.body.form.tel.value +
            "\n" +
            "Have a Van?: " +
            req.body.form.haveVan.value +
            "\n" +
            "Van Details: " +
            req.body.form.vanDetails.value +
            "\n" +
            "Conversion Option Chosen: " +
            req.body.form.convertionOption.value +
            "\n" +
            "Ideal date for start conversion: " +
            req.body.form.idealDate.value +
            "\n" +
            "Primary use of the Van: " +
            req.body.form.primaryUse.value +
            "\n" +
            "Aditional message: " +
            req.body.form.message.value;

        const mailOptions = {
            from: data.user,
            to: "patavansboulder@gmail.com",
            subject: "Mail from Patavans web-site preconversion form",
            text: emailText,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        res.status(201);
        res.json(req.body.form);
    } else {
        res.status(401);
    }
});

app.listen(3000, () => {
    console.log("server running!");
});
