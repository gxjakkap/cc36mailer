import { Resend } from 'resend'
import EmailTemplate from './template'

const resend = new Resend(process.env.RESEND_API_KEY)

const data = [
    {
        fullname: "ข้อมูล ทดสอบ",
        trackingId: "EF0000000000TH"
    }
]

data.forEach(async(x) => {
    await resend.emails.send({
        from: `${process.env.SENDER_NAME} <${process.env.SENDER_EMAIL}>`,
        to: ['delivered@resend.dev'],
        subject: 'เลข Tracking สำหรับเสื้อ ComCamp 36',
        react: EmailTemplate(x),
      })
})