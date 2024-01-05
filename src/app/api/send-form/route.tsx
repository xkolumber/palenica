import { EmailContactPage } from "@/components/EmailContactPage";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const {
    meno_priezvisko,
    telefon,
    email,
    druh_kvasu,
    koniec_kvasenia,
    message,
  } = await req.json();
  const emailHtml = EmailContactPage({
    meno_priezvisko,
    telefon,
    email,
    druh_kvasu,
    koniec_kvasenia,
    message,
  });
  try {
    const data = await resend.emails.send({
      from: "info@palenicaspisskabela.sk",
      to: "palenicaspisskabela@gmail.com",
      subject: "Dotaz od zákazníka",
      html: emailHtml,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
