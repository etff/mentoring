import Link from "next/link";

const Main = () => {
    return (
        <main className="w-full max-w-[800px] p-5 mx-auto">
            <section
                className="p-10 mx-auto bg-white shadow-md rounded-lg min-h-[85vh] flex justify-center items-center">
                <article className="flex flex-col justify-between items-center w-full max-w-[600px]">
                    <header>
                        <h1 className="text-6xl font-bold text-center mb-8">
                            멘토링 관리
                        </h1>
                    </header>
                    <section className="mt-10 text-xl w-[300px]">
                        <div>
                            <h2>멘토링 시작</h2>
                            <p>새로운 멘토링을 시작합니다</p>
                            <Link
                                href={{
                                    pathname: "/mentor/start"
                                }}
                                className="border-2 border-black bg-blue-400 rounded flex justify-center items-center w-full h-12"
                            >
                                멘토링 시작
                            </Link>
                        </div>
                    </section>
                    <section className="mt-10 text-xl w-[300px]">
                        <h2>멘토링 내역</h2>
                        <p>멘토링 종료 후 오늘 세션을 평가해주세요.</p>
                        <Link
                            href={{
                                pathname: "/mentor/review"
                            }}
                            className="border-2 border-black bg-blue-400 rounded flex justify-center items-center w-full h-12"
                        >
                            멘토링 후기남기기
                        </Link>
                    </section>
                    <section className="mt-10 text-xl">
                        <h2>결과보기</h2>
                        <p>멘토링 평가 내용을 확인할 수 있습니다.</p>
                        <Link
                            href={{
                                pathname: "/mentee/feedback"
                            }}
                            className="border-2 border-black bg-blue-400 rounded flex justify-center items-center w-full h-12"
                        >
                            결과보기
                        </Link>
                    </section>
                </article>
            </section>
        </main>
    );
}

export default Main;
