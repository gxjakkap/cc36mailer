import {
  Body,
  Button,
  CodeInline,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  fullname: string;
  trackingId: string;
}

const DELIVERY_INFO = {
    provider: "ไปรษณีย์ไทย",
    trackingLink: "https://track.thailandpost.co.th/?trackNumber="
}

export default function EmailTemplate({ fullname, trackingId }: EmailTemplateProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Helvetica"
          fallbackFontFamily="Helvetica"
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>เลข Tracking สำหรับเสื้อ ComCamp 36</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto w-full max-w-[700px] rounded border border-solid border-[#eaeaea] p-0">
            <Section className="px-12 pt-12 text-start">
              <Img
                src={`https://res.cloudinary.com/dynrld3nm/image/upload/cc36preorder/ComCamp36_Black_q20vad.png`}
                width="200"
                height="100"
                className="my-0"
              />
              <Heading className="my-10 text-2xl leading-tight font-medium">
                เลข Tracking สำหรับเสื้อ ComCamp 36
              </Heading>
              <Text className="text-[1rem]">
                ขอขอบคุณคุณ{fullname}สำหรับการสั่งซื้อเสื้อ ComCamp 36 ล่วงหน้า โดยในขณะนี้ทีมงานค่ายได้ทำการจัดส่งสินค้าเรียบร้อยแล้ว และสามารถตรวจสอบสถานะการจัดส่งได้จากข้อมูลด้านล่าง
              </Text>
              <Section>
                <Heading as="h3">
                  ผู้ให้บริการขนส่ง
                </Heading>
                <Text className="text-[1rem]">
                  {DELIVERY_INFO.provider}
                </Text>
                <Heading as="h3">
                  เลข Tracking
                </Heading>
                <Text className="text-[1rem]">
                  <CodeInline className="rounded-[6px] bg-gray-300 px-[4px] py-[2px]">{trackingId}</CodeInline>
                </Text>
                <Text className="text-[1rem]">
                  หรือกดปุ่มด้านล่าง เพื่อตรวจสอบสถานะการจัดส่ง
                </Text>
                <Button
                    className="box-border w-full rounded-[8px] bg-[#F15A29] hover:bg-[#F47E58] px-[12px] py-[12px] text-center font-semibold text-white"
                    href={`${DELIVERY_INFO.trackingLink}${trackingId}`}
                >
                    ตรวจสอบสถานะ
                </Button>
              </Section>
            </Section>

            <Section className="px-12 text-sm leading-5">
              <Img
                src="https://res.cloudinary.com/dynrld3nm/image/upload/cc36preorder/kmutt-cpe-logo_lyyokm.png"
                width="144"
                height="80"
                className="my-0"
              />

              <Text className="text-[0.8rem]">
                © 2025 ComCamp 36. Computer Engineering Department, King
                Mongkut&apos;s University of Technology Thonburi, 126 Pracha
                Uthit Rd, Bang Mot, Thung Khru, Bangkok 10140
              </Text>
              <Text className="text-center text-[0.8rem]">
                อีเมลฉบับนี้ถูกส่งโดยระบบอัตโนมัติ โปรดอย่าตอบกลับ
                หากมีข้อสงสัยสามารถติดต่อทีมงานได้ที่{" "}
                <Link href="mailto:kmutt.comcamp@gmail.com">
                  kmutt.comcamp@gmail.com
                </Link>{" "}
                หรือ
                <Link href="https://comcamp.io/#contact">ช่องทางต่อไปนี้</Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}