import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Тарас Шевельов — Професійний масаж у Києві",
  description:
    "Індивідуальний підхід до відновлення, здоров'я та гармонії тіла. Масажист Тарас Шевельов, Київ. Понад 10 років досвіду, 15 напрямків масажу.",
  keywords: [
    "масаж київ",
    "масажист київ",
    "Тарас Шевельов",
    "лікувальний масаж",
    "мануальна терапія",
    "тайський масаж",
    "антицелюлітний масаж",
  ],
  openGraph: {
    title: "Тарас Шевельов — Професійний масаж у Києві",
    description:
      "Індивідуальний підхід до відновлення, здоров'я та гармонії тіла.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
