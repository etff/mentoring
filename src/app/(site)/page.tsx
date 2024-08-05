import Link from "next/link";

export default function Home() {
    return (

        <main className="w-full max-w-[800px] p-[20px] mx-auto">
            <section className="w-full max-w-[800px] p-[100px] mx-auto">
                <article className="flex flex-col justify-between items-center">
                    <header>
                        <h1 className="text-6xl font-bold">
                            멘토링 사이트
                        </h1>
                    </header>
                    <section className="mt-10 text-2xl">
                        <Link href="/mentee" className="text-blue-500 underline hover:text-blue-800">멘티 사이트로 이동</Link>
                        <Link href="/mentor" className="text-blue-500 underline hover:text-blue-800">멘토 사이트로 이동</Link>
                    </section>
                </article>
            </section>
        </main>

    );
}
