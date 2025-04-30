import { Resend } from 'resend'
import EmailTemplate from './template'
import { title } from './template'

const resend = new Resend(process.env.RESEND_API_KEY)

const data = [
    {
        fullname: "ข้อมูล ทดสอบ",
        trackingId: "EF0000000000TH",
        email: "delivered@resend.dev"
    }
]

data.forEach(async(x) => {
    await resend.emails.send({
        from: `${process.env.SENDER_NAME} <${process.env.SENDER_EMAIL}>`,
        to: [x.email],
        subject: title,
        react: EmailTemplate({
            fullname: x.fullname,
            trackingId: x.trackingId
        }),
      })
})