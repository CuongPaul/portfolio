const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const nodemailer = require("nodemailer");

dotenv.config();

const port = process.env.PORT;

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

app.use("/", router);
app.listen(port, () => console.log(`Server is running on port ${port}`));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: { pass: process.env.EMAIL_PASS, user: process.env.EMAIL_USER },
});

contactEmail.verify((error) => {
  if (error) {
    console.error(error);
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
    to: process.env.EMAIL_USER,
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
