"use client"

import Start from "@/components/ui/mentor/Start";

type Props = {
    userId: string;
}

const StartContainer = ({userId}: Props) => {


    return (
        <div>
            <Start profile={null}/>
        </div>
    )
};

export default StartContainer;
