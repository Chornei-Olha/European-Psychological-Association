import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Налаштовуємо транспортер для Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Використовуйте свій SMTP сервер, якщо не Gmail
  auth: {
    user: process.env.EMAIL_USER, // Ваша електронна пошта, встановлена в .env
    pass: process.env.EMAIL_PASS, // Ваш пароль або паролі для додатків
  },
});
// const transporter = nodemailer.createTransport({
//   jsonTransport: true,
// });

export async function POST(request: Request) {
  try {
    const { name, email, comment } = await request.json();

    const mailOptions = {
      from: process.env.EMAIL_USER, // Ваша електронна пошта
      to: "pribhlib@gmail.com", // Адреса замовника або ваша
      subject: "Нове повідомлення з форми",
      text: `Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${comment}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Лист відправлено" });
  } catch (error) {
    if (typeof error === "object" && error !== null && "message" in error) {
      return NextResponse.json(
        { message: "Помилка відправки листа", error: (error as Error).message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "Помилка відправки листа", error: "Невідома помилка" },
        { status: 500 }
      );
    }
  }
}
