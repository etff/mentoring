import Link from "next/link";

export default function Home() {
    return (
        <main className="w-full max-w-[800px] p-5 mx-auto">
            <section
                className="p-10 mx-auto bg-white shadow-md rounded-lg min-h-[85vh] flex justify-center items-center">
                <article className="flex flex-col justify-between items-center w-full max-w-[600px]">
                    <header>
                        <h1 className="text-4xl font-bold text-center mb-8">
                            멘토링 사이트
                        </h1>
                    </header>
                    <section className="mt-6 text-lg text-center">
                        <h2 className="text-2xl font-semibold mb-4">멘티</h2>
                        <Link href="/mentee" className="text-blue-500 underline hover:text-blue-800">
                            멘티 사이트로 이동
                        </Link>
                    </section>
                    <section className="mt-6 text-lg text-center">
                        <h2 className="text-2xl font-semibold mb-4">멘토</h2>
                        <Link href="/mentor" className="text-blue-500 underline hover:text-blue-800">
                            멘토 사이트로 이동
                        </Link>
                    </section>
                </article>
            </section>
        </main>
    );
}
