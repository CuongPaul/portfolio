const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");

const EMAIL_PASS = "ozng lpkm gwjm asiq";
const EMAIL_USER = "cuongvt716@gmail.com";

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

app.use("/", router);
app.listen(5000, () => console.log("Server is running on port 5000"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: { pass: EMAIL_PASS, user: EMAIL_USER },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

router.get("/", (_req, res) => {
  res.send("Hello World!");
});

router.post("/contact", (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  const name = req.body.firstName + req.body.lastName;

  const mail = {
    from: name,
    to: EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message sent" });
    }
  });
});
