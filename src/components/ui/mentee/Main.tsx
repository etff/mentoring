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
                    <section className="mt-10 text-xl text-center">
                        <h2>ORS</h2>
                        <p>오늘을 포함해 지난 한주간을 돌아봅시다.</p>
                        <Link
                            href={{
                                pathname: "/mentee/ors"
                            }}
                            className="border-2 border-black bg-blue-400 rounded"
                        >
                            ORS 시작하기
                        </Link>
                    </section>
                    <section className="mt-10 text-xl text-center">
                        <h2>SRS</h2>
                        <p>오늘을 포함해 지난 한주간을 돌아봅시다.</p>
                        <Link
                            href={{
                                pathname: "/mentee/srs"
                            }}
                            className="border-2 border-black bg-blue-400 rounded"
                        >
                            SRS 시작하기
                        </Link>
                    </section>
                </article>
            </section>
        </main>
    );
}

export default Main;
