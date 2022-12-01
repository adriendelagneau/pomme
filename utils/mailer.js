const nodemailer = require('nodemailer')

exports.sendConfirmationEmail= function({toUser, hash}) {
    return Promise((res, rej) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GOOGLE_USER,
                pass: process.env.GOOGLE_PASSWORD,
            }
        })

        const message = {
            from : process.env.GOOGLE_USER,
            // in pro
            // to: toUser.email
            to: process.env.GOOGLE_USER,
            subject: 'Your App -Activate Account',
            html:`
            <h3>Hello ${toUser.name}</h3>
            <p> link to activate youur account:
            <a target="_" href="${process.env.DOMAIN}/api/activate/user/${hash}">activate</a>
            </p>
            `
        }

        transporter.sendMail(message, function(err, info) {
            if(err) {
                rej(err)
            } else {
                res(info)
            }
        })
    })
}