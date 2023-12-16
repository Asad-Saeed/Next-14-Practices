import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard', //%s  for tiitle tamplate for other pages with company name
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js 14 Dashboard, built with App Router.',
  metadataBase: new URL('http://localhost:3000/dashboard'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
