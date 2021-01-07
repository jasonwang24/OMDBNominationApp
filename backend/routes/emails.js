const router = require("express").Router();
const nodemailer = require('nodemailer');

router.route("/").post((req, res) => {
 const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: 'omdbnominations@gmail.com',
    to: `${req.body.recipient}`,
    subject: 'OMDB Nominations',
    html:`<body>Hi, this is the OMDB Nominations Bot!<br /><br />Thank you for submitting your nominations. You nominated for:<br /><br />${req.body.body}<br /><br />Thanks!</body>`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        res.end('Error: '+ error);
    } else {
      res.end('Successfully sent: ' + info.response);
    }
  });
  
});

module.exports = router;
