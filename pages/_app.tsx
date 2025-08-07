import Head from "next/head";
import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<Head>
				<title>Vertura - Wear A Culture</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<AnimatePresence mode="wait">
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
			{/* <Footer /> */}
		</>
	);
}
