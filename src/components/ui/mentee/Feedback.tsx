"use client";
import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

type Props = {
    profile?: any;
    orsList?: any[];
};

const CHART_ATTRIBUTE = {
    individual: '개인적',
    interpersonal: '대인적',
    social: '사회적',
    overall: '전반적',
};

const Feedback = ({profile = null, orsList = []}: Props) => {
    const initialDataPoint = {
        name: `회차 0`,
        [CHART_ATTRIBUTE.individual]: 0,
        [CHART_ATTRIBUTE.interpersonal]: 0,
        [CHART_ATTRIBUTE.social]: 0,
        [CHART_ATTRIBUTE.overall]: 0,
    };

    // Transform orsList data for the chart
    const chartData = [
        initialDataPoint,
        ...orsList.map((ors, index) => ({
            name: `회차 ${index + 1}`,
            [CHART_ATTRIBUTE.individual]: ors.individual,
            [CHART_ATTRIBUTE.interpersonal]: ors.interpersonal,
            [CHART_ATTRIBUTE.social]: ors.social,
            [CHART_ATTRIBUTE.overall]: ors.overall,
        }))
    ];

    return (
        Array.isArray(orsList) && orsList.length >= 1 ? (
            <main className="w-full max-w-[800px] p-5 mx-auto">
                <section
                    className="p-10 mx-auto bg-white shadow-md rounded-lg min-h-[85vh] flex flex-col justify-center items-center">
                    <article className="flex flex-col justify-between items-center w-full max-w-[600px]">
                        <header>
                            <h1 className="text-6xl font-bold text-center mb-8">
                                {profile?.full_name} 님의 ORS
                            </h1>
                        </header>
                        <div className="w-full flex justify-center">
                            <div className="w-full max-w-[800px]">
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart
                                        data={chartData}
                                        margin={{top: 5, right: 30, left: 20, bottom: 5}}
                                    >
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="name"/>
                                        <YAxis domain={[0, 10]}/>
                                        <Tooltip/>
                                        <Legend/>
                                        <Line type="monotone" dataKey={CHART_ATTRIBUTE.individual} stroke="#8884d8"
                                              activeDot={{r: 8}}/>
                                        <Line type="monotone" dataKey={CHART_ATTRIBUTE.interpersonal} stroke="#82ca9d"/>
                                        <Line type="monotone" dataKey={CHART_ATTRIBUTE.social} stroke="#ffc658"/>
                                        <Line type="monotone" dataKey={CHART_ATTRIBUTE.overall} stroke="#ff7300"/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        ) : (
            <div className="w-full max-w-[800px] p-5 mx-auto">
                <section
                    className="p-10 mx-auto bg-white shadow-md rounded-lg min-h-[85vh] flex justify-center items-center">
                    <article className="flex flex-col justify-between items-center w-full max-w-[600px]">
                        <header>
                            <h1 className="text-6xl font-bold text-center mb-8">Empty!</h1>
                        </header>
                    </article>
                </section>
            </div>
        )
    );
};

export default Feedback;
