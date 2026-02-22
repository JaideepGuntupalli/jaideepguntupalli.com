import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import "./global.css";

const graphik = localFont({
    src: [
        {
            path: "../public/fonts/Graphik-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Graphik-Medium.ttf",
            weight: "600",
            style: "bold",
        },
    ],
    variable: "--font-graphik",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://imjaideep.com"),
    title: {
        default: "Jaideep Guntupalli",
        template: "%s | Jaideep Guntupalli",
    },
    description:
        "I'm a software engineer immersed in React, Next.js and a hardcore Typescripter. Just messing around, building and writing about awesome stuff!",
    openGraph: {
        title: "Jaideep Guntupalli",
        description:
            "I'm a software engineer immersed in React, Next.js and a hardcore Typescripter. Just messing around, building and writing about awesome stuff!",
        url: "https://imjaideep.com",
        siteName: "Jaideep Guntupalli",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "Jaideep Guntupalli",
        card: "summary_large_image",
    },
    verification: {
        google: "23ZYfFdqUz2U_c8nCL1j1zLetciI9oHOchFhNPZ5Srs",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={clsx(
                "text-white bg-[#111010] bg-grid-dark [--grid-opacity:0.08] [--grid-size:100px] bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900",
                graphik.variable
            )}
        >
            <head>
                <PlausibleProvider domain="imjaideep.com" />
            </head>
            <body className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 mt-8 md:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <Sidebar />
                    {children}
                    <SpeedInsights />
                    <Footer />
                </main>
            </body>
        </html>
    );
}
