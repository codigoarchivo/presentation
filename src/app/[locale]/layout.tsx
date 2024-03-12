import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { i18n } from '../../../i18n-config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'Jackson Quintero - %s',
    default: 'Jackson Quintero',
  },
};

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ params: { locale: lang } }));
}

export default function RootLayout({ params, children }: LayoutProps) {
  const { locale } = params;
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
