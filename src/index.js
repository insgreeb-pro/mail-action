const nodeMailer = require("nodemailer")
const core = require("@actions/core")

const transport = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  ignoreTLS: false,
  secure: false,
  auth: {
    user: core.getInput("email"),
    pass: core.getInput("password"),
  },
})

transport.sendMail(
  {
    from: core.getInput("email"),
    to: core.getInput("to"),
    subject: core.getInput("subject"),
    text: core.getInput("text"),
    html: core.getInput("html"),
  },
  (err, info) => {
    if (err) throw err.message
    console.log("Mail Send: " + info.response)
  }
)
