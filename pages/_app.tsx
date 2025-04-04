import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Manrope } from "next/font/google";

// Define fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${manrope.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
