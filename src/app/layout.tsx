import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
    title: 'Clock',
    description: 'Clock app made in react'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
