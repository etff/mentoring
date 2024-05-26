import Link from "next/link";


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    멘토링 페이지
                </h1>
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <p className="mt-3 text-2xl">
                        <Link href="/mentee">멘티 페이지로 이동</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}