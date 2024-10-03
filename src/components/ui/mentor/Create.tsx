"use client";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

type Props = {
    onCreateMentoring: (name: string, startDate: string, endDate: string) => {};
};

const Create = ({
                    onCreateMentoring
                }: Props) => {

    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const router = useRouter();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCreateMentoring(name, startDate, endDate);
        router.push("/mentor")
    };

    return (
        <main className="w-full h-full max-w-[800px] p-5 mx-auto">
            <section
                className="p-10 mx-auto bg-white shadow-md rounded-lg min-h-[85vh] flex justify-center items-center">
                <article className="flex flex-col justify-between items-center">
                    <header className="w-full flex flex-col items-center">
                        <h1 className="text-6xl font-bold">멘토링 생성</h1>
                    </header>
                    <form className="mt-10 text-2xl w-full flex flex-col items-center p-2" onSubmit={onSubmit}>
                        <div className="mb-6 w-full">
                            <label htmlFor="name" className="block text-xl font-bold mb-2">멘토링 명</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="
                                    p-4
                                    w-full
                                    border border-black rounded-lg font-bold
                                    "
                                maxLength={50}
                                placeholder={"50자 이내로 입력해주세요"}
                            />
                        </div>

                        <div className="mb-6 w-full">
                            <label htmlFor="date" className="block text-xl font-bold mb-2">시작일</label>
                            <input
                                id="date"
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="
                                    p-4
                                    w-full
                                    bg-white
                                    border border-black rounded-lg font-bold
                                "
                            />
                        </div>

                        <div className="mb-6 w-full">
                            <label htmlFor="date" className="block text-xl font-bold mb-2">종료일</label>
                            <input
                                id="date"
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="
                                    p-4
                                    w-full
                                    bg-white
                                    border border-black rounded-lg font-bold
                                "
                            />
                        </div>

                        <div className="flex items-center justify-between mt-4 w-full max-w-[800px]">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit"
                            >
                                제출하기
                            </button>
                        </div>
                    </form>
                </article>
            </section>
        </main>
    );
};

export default Create;
