"use client";
import Link from "next/link"; // Import the new component

type Props = {
    profile?: any;
};

const Start = ({
                   profile = null,
               }: Props) => {

    return (
        <main className="w-full h-full max-w-[800px] p-5 mx-auto">
            <section
                className="p-10 mx-auto bg-white shadow-md rounded-lg min-h-[85vh] flex justify-center items-center">
                <article className="flex flex-col justify-between items-center">
                    <header className="w-full flex flex-col items-center">
                        <h1 className="text-6xl font-bold">멘토링 시작하기</h1>
                    </header>
                    <section className="mt-10 text-xl w-[300px]">
                        <div>
                            <h2>멘토링 생성</h2>
                            <Link
                                href={{
                                    pathname: "/mentor/create"
                                }}
                                className="border-2 border-black bg-blue-400 rounded flex justify-center items-center w-full h-12"
                            >
                                멘토링 생성하기
                            </Link>
                        </div>
                        <div>
                            <h2>멘토링 참여</h2>
                            <Link
                                href={{
                                    pathname: "/mentor/join"
                                }}
                                className="border-2 border-black bg-blue-400 rounded flex justify-center items-center w-full h-12"
                            >
                                멘토링 참여하기
                            </Link>
                        </div>
                    </section>

                </article>
            </section>
        </main>
    );
};

export default Start;
