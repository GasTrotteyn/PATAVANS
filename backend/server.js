const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const data = require("./data");

const app = express();

app.use(bodyParser.json());

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: data.user,
        pass: data.passWord,
    },
    tls: { rejectUnauthorized: false },
});

// const mailOptions = {
//     from: data.user,
//     to: "gtrotteyn@hotmail.com",
//     subject: "Sending Email using Node.js",
//     text: "That was easy!",
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Email sent: " + info.response);
//     }
// });

app.get("/", (req, res) => {
    res.send("hola mundo!");
});

app.post("/coso", (req, res) => {
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

        //console.log(emailText);
        const mailOptions = {
            from: data.user,
            to: "gtrotteyn@hotmail.com",
            subject: "Mail from the web-site form",
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

app.listen(3000, () => {
    console.log("server running!");
});
