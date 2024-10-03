import {ReactNode} from "react";
import "@/app/globals.css";

type Props = { children: ReactNode, modal: ReactNode };
export default function Layout({children}: Props) {
    return (
        <div className="bg-blue-200 text-black">
            {children}
        </div>
    )
}
