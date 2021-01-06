const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const remetent = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'clinicapolisipo@gmail.com',
      pass: 'Ref@t-Poli-200',
    }
  })
  const email = {
    from: 'clinicapolisipo@gmail.com ',
    to: 'clinicapolisipo@gmail.com ',
    subject: 'Polisipo: Nova inscrição!',
    text: `
    Nome completo: ${req.body.fullname}
    E-mail: ${req.body.email}
    Telefone: ${req.body.phone}
    Cidade: ${req.body.city}
    Serviço: 
      Psicoterapia infantil: ${req.body.service.psicoterapia_infantil ? 'sim' : ''}
      Psicoterapia adolescente: ${req.body.service.psicoterapia_adolescente ? 'sim' : ''}
      Psicoterapia adulto: ${req.body.service.psicoterapia_adulto ? 'sim' : ''}
      Psicoterapia casal: ${req.body.service.psicoterapia_casal ? 'sim' : ''}
    `
  }

  remetent.sendMail(email, function (error, info) {
    return res.json({
      message: 'E-mail enviado com sucesso!'
    });
  })

})

module.exports = router;
