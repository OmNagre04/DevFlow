import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: "./Fonts/InterVF.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./Fonts/SpaceGorteskVF.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community driven platform made for asking and answering the programming related questions. Get help, share knowledge and colaborate with your fellow developers from around the world. Explore topics in web development , app development, AI, ML, Cloud Computing, Data Science, Algorithms, Data Structures & many more. So what are you waiting for join the community & see becoming a better developer of yourself. ",
  icons: {
    icon: '/images/site-logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
