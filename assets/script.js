console.log("%cThe Answer To This Question Is the Password You Seek!", "font-size: 15px;");
console.log("*****What Year Was JavaScript Created?****");

const nodemailer = require("nodemailer");
// const $ = require("jQuery")(require("jsdom").jsdom().parentWindow);

$("#sendMSG").on("click", function(e) {
    e.preventDefault();
    const name = $("#nameInput").val();
    const email = $("#emailInput").val();
    const message = $("#detailsInput").val();

    console.log(`Message From: ${name} | Email: ${email} | Message Details: ${message}`);
    


"use strict";
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"McCabe Portfolio" <hatchetcreektimbers@gmail.com>', // sender address
    to: "mccabenorthup@gmail.com", // list of receivers
    subject: "Contact from McCabe Portfolio", // Subject line
    text: `Message From: ${name} | Email: ${email} | Message Details: ${message}` // plain text body
     // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

});