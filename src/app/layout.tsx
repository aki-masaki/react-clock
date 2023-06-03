import { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Clock',
    description: 'A clock app built in react'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body className={montserrat.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
