"use client";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import RangeInput from "./input/RangeInput";
import useUserStore from "@/store/auth/useUserStore"; // Import the new component

const MAX = 10;
const MIN = 0;

type Props = {
    profile?: any;
    onCreateOrs: (individual: number, interpersonal: number, social: number, overall: number) => {};
};

const Ors = ({
                 profile = null,
                 onCreateOrs,
             }: Props) => {
    const [individual, setIndividual] = useState<number>(MIN);
    const [interpersonal, setInterpersonal] = useState<number>(MIN);
    const [social, setSocial] = useState<number>(MIN);
    const [overall, setOverall] = useState<number>(MIN);
    const router = useRouter();

    useUserStore().setUserId(profile?.id);
    useUserStore().setUserName(profile?.full_name);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCreateOrs(individual, interpersonal, social, overall);
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
                            오늘을 포함하여 지난 한주간 자신의 삶을 평가해주세요. 왼쪽에 표시하는 것은 낮은 수준을 뜻하며, 오른쪽에 표시하는 것은 높은 수준을 뜻합니다.
                        </p>
                    </header>
                    <form className="mt-10 text-2xl w-full flex flex-col items-center p-2" onSubmit={onSubmit}>
                        <RangeInput value={individual} onChange={setIndividual} label="개인적으로 (자기자신의 웰빙)"/>
                        <RangeInput value={interpersonal} onChange={setInterpersonal} label="대인적으로 (가까운 관계, 가족)"/>
                        <RangeInput value={social} onChange={setSocial} label="사회적으로 (친구관계, 학교, 직장)"/>
                        <RangeInput value={overall} onChange={setOverall} label="전반적으로 (웰빙에 대한 전반적 느낌)"/>

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

export default Ors;
