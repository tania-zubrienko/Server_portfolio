const transporter = require("../config/transport.config");

const router = require("express").Router();

router.post("/send", (req, res, next) => {
  const { name, email, message } = req.body

  transporter.sendMail({
    from: 'tania.zubrienko@hotmail.com',
    to: 'tania.zubrienko@hotmail.com',
    subject: `Contact from ${name}`,
    html: `${message} <hr/> ${email}`
  })
    .then(res.sendStatus(200))
    .catch(res.sendStatus(500))

});

module.exports = router;
