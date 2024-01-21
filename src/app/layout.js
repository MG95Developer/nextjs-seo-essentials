import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

/* change this metadata to use title: default, template, absolute */
export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
	// add author (name, url) details meta tags
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main> {children}</main>
				<Footer />
			</body>
		</html>
	);
}
