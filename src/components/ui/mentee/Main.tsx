import Link from "next/link";

const Main = () => {
    return (
        <main className="w-full mx-auto flex justify-center items-center min-h-screen">
            <section className="w-full mx-auto p-2">
                <article className="flex flex-col justify-between items-center">
                    <header>
                        <h1 className="text-6xl font-bold">
                            ORS / SRS
                        </h1>
                    </header>
                    <section className="mt-10 text-xl">
                        <h2> ORS </h2>
                        <p> 오늘을 포함해 지난 한주간을 돌아봅시다.</p>
                        <Link
                            href="/mentee/ors"
                            className="border-2 border-black bg-blue-400 mt-2">ORS 시작하기</Link>
                    </section>
                    <section className="mt-10 text-xl">
                        <h2> SRS </h2>
                        <p> 오늘을 포함해 지난 한주간을 돌아봅시다.</p>
                        <button className="border-2 border-black bg-blue-400 mt-2">SRS 시작하기</button>
                    </section>
                </article>
            </section>
        </main>
    );
}

export default Main;