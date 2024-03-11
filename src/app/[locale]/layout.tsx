import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: 'Atletdata - %s',
    default: 'Atletdata',
  },
};

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};
export default function RootLayout({ params, children }: LayoutProps) {
  const { locale } = params;
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
