import './globals.css';
import { Inter } from 'next/font/google';
import ClientThemeWrapper from '@/contexts/ClientThemeWrapper';
import Navbar from '@/components/Navbar/Navbar';
import StoreProvider from '@/store/StoreProvider';
import ThemeProvider from '@/contexts/ThemeContext';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Baumel Márton',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <html lang='en'>
                <body className={inter.className}>
                    <ThemeProvider>
                        <ClientThemeWrapper>
                            <Navbar />
                            <div>{children}</div>
                        </ClientThemeWrapper>
                    </ThemeProvider>
                </body>
            </html>
        </StoreProvider>
    );
}