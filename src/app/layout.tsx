import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import AuthHeader from "@/components/ui/AuthHeader";
import {getUser} from "@/actions/auth/user.action";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Mentoring",
    description: "Mentoring: SRS, ORS, and more",
};

type Props = {
    children: React.ReactNode
}

export default async function RootLayout({children,}: Props) {
    const user = await getUser({serverComponent: true});
    return (
        <html lang="en">
        <body className={`${inter.className} bg-blue-200 text-black`}>
        <AuthHeader user={user}/>
        {children}</body>
        </html>
    );
}
