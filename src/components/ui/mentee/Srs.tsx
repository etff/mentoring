"use client";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import RangeInput from "./input/RangeInput";

const MIN = 0;

type Props = {
    profile?: any;
    onCreateSrs: (relationship: number, goals: number, approach: number, overall: number) => {};
};

const Srs = ({profile = null, onCreateSrs}: Props) => {
    const [relationship, setRelationship] = useState<number>(MIN);
    const [goals, setGoals] = useState<number>(MIN);
    const [approach, setApproach] = useState<number>(MIN);
    const [overall, setOverall] = useState<number>(MIN);
    const router = useRouter();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCreateSrs(relationship, goals, approach, overall);
        router.push("/mentee");
    };

    return (
        <main className="w-full h-full max-w-[800px] p-5 mx-auto">
            <section
                className="p-10 mx-auto bg-white shadow-md rounded-lg min-h-[85vh] flex justify-center items-center">
                <article className="flex flex-col justify-between items-center">
                    <header className="w-full flex flex-col items-center">
                        <h1 className="text-6xl font-bold">ORS</h1>
                        <p className="mt-2 text-xl">{profile?.full_name} 님 요청 드립니다.</p>
                        <p className="mt-2 text-xl w-full max-w-[800px]">
                            오늘 세션을 평가해주세요. 왼쪽에 표시하는 것은 낮은 수준을 뜻하며, 오른쪽에 표시하는 것은 높은 수준을 뜻합니다.
                        </p>
                    </header>
                    <form className="mt-10 text-2xl w-full flex flex-col items-center p-2" onSubmit={onSubmit}>
                        <RangeInput value={relationship} onChange={setRelationship} label="관계 (말을 들어주고 이해받고 존중받았다)"/>
                        <RangeInput value={goals} onChange={setGoals}
                                    label="목표와 주제 (내가 다루거나 얘기하길 원하는 것을 우리가 다루고 얘기했다)"/>
                        <RangeInput value={approach} onChange={setApproach} label="접근법이나 방식 (이 분의 접근법은 나에게 잘 맞는다)"/>
                        <RangeInput value={overall} onChange={setOverall} label="전반적으로 (전반적으로 오늘의 세션은 나에게 알맞았다)"/>

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

export default Srs;
