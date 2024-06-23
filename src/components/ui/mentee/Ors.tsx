"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";

const MAX = 10;
const MIN = 0;

type Props = {
    sharedUserFullName: string | "";
    onCreateOrs: (individual: number, interpersonal: number, social: number, overall: number) => {};
};

const Ors = ({
                 sharedUserFullName = "",
                 onCreateOrs,
             }: Props) => {
    const [individual, setIndividual] = useState<number>(MIN);
    const [interpersonal, setInterpersonal] = useState<number>(MIN);
    const [social, setSocial] = useState<number>(MIN);
    const [overall, setOverall] = useState<number>(MIN);
    const router = useRouter();

    const handleIndividual = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndividual(Number(event.target.value));
    };

    const handleInterpersonal = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInterpersonal(Number(event.target.value));
    };

    const handleSocial = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSocial(Number(event.target.value));
    };

    const handleOverall = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOverall(Number(event.target.value));
    };

    const onSubmit = () => {
        onCreateOrs(individual, interpersonal, social, overall);
        router.push("/mentee");
    }

    return (
        <main className="w-full max-w-[800px] p-[20px] mx-auto">
            <section className="w-full max-w-[800px] p-[100px] mx-auto">
                <article className="flex flex-col justify-between items-center">
                    <header className="w-full flex flex-col items-center">
                        <h1 className="text-6xl font-bold">
                            ORS
                        </h1>
                        <p className="mt-2 text-xl">{sharedUserFullName} 님 요청 드립니다.</p>
                        <p className="mt-2 text-xl">
                            오늘을 포함하여 지난 한주간 자신의 삶을 평가해주세요. 왼쪽에 표시하는 것은 낮은 수준을 뜻하며, 오른쪽에 표시하는 것은 높은 수준을 뜻합니다.
                        </p>
                    </header>
                    <section className="mt-10 text-2xl w-full flex flex-col items-center">
                        <div className="w-full">
                            <label htmlFor="minmax-range1"
                                   className="block mb-2 text-sm font-medium text-gray-900 ">개인적으로 (자기자신의 웰빙)</label>

                            <input id="labels-range-input1" type="range" value={individual} min="0" max="10"
                                   onChange={handleIndividual}
                                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

                            <label htmlFor="minmax-range2"
                                   className="block mt-2 mb-2 text-sm font-medium text-gray-900">대인적으로 (가까운 관계, 가족)</label>

                            <input id="labels-range-input2" type="range" value={interpersonal} min="0" max="10"
                                   onChange={handleInterpersonal}
                                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

                            <label htmlFor="minmax-range3"
                                   className="block mt-2 mb-2 text-sm font-medium text-gray-900">사회적으로 (친구관계, 학교, 직장)</label>

                            <input id="labels-range-input3" type="range" value={social} min="0" max="10"
                                   onChange={handleSocial}
                                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

                            <label htmlFor="minmax-range4"
                                   className="block mt-2 mb-2 text-sm font-medium text-gray-900">전반적으로 (웰빙에 대한 전반적 느낌)</label>

                            <input id="labels-range-input4" type="range" value={overall} min="0" max="10"
                                   onChange={handleOverall}
                                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                        </div>

                        <div className="flex items-center justify-between mt-4 w-full">
                            <button
                                onClick={onSubmit}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="button">
                                제출하기
                            </button>
                        </div>
                    </section>
                </article>
            </section>
        </main>
    );
}

export default Ors;