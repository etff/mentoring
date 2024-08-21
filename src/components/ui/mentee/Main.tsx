import Link from "next/link";
import {User} from "@supabase/auth-js";

type Props = {
    user: User | null;
}

const Main = ({user}: Props) => {
    return (
        <main className="w-full max-w-[800px] p-5 mx-auto">
            <section
                className="p-10 mx-auto bg-white shadow-md rounded-lg min-h-[85vh] flex justify-center items-center">
                <article className="flex flex-col justify-between items-center w-full max-w-[600px]">
                    <header>
                        <h1 className="text-6xl font-bold text-center mb-8">
                            ORS / SRS
                        </h1>
                    </header>
                    <section className="mt-10 text-xl">
                        <div>
                        <h2>ORS</h2>
                        <p>오늘을 포함해 지난 한주간을 돌아봅시다.</p>
                        <Link
                            href={{
                                pathname: "/mentee/ors"
                            }}
                            className="border-2 border-black bg-blue-400 rounded flex justify-center items-center w-full h-12"
                        >
                            ORS 시작하기
                        </Link>
                        </div>
                    </section>
                    <section className="mt-10 text-xl">
                        <h2>SRS</h2>
                        <p>멘토링 종료 후 오늘 세션을 평가해주세요.</p>
                        <Link
                            href={{
                                pathname: "/mentee/srs"
                            }}
                            className="border-2 border-black bg-blue-400 rounded flex justify-center items-center w-full h-12"
                        >
                            SRS 시작하기
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
