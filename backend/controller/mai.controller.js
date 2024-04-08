import nodemailer from 'nodemailer';

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'willy.bauch13@ethereal.email',
            pass: 'PPassu1qGVars8tSGV'
        }
    });

    let info = await transporter.sendMail({
        from: '"raj thakur 👻" <thegreatayurveda@gmail.com>',
        to: "rajthakur8827142011@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
};

export default sendMail;