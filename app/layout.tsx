import { Metadata } from 'next';
import './global.css'

export const metadata: Metadata = {
  title: "文字カウント",
  description: "文章の文字数を数えることができます。文字をカウントするのに便利です。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
