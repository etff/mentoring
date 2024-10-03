"use client"

import Create from "@/components/ui/mentor/Create";
import mentoringController from "@/app/(site)/mentor/hook/mentoringController";

type Props = {
    userId: string;
}

const CreateContainer = ({userId}: Props) => {
    const {onCreateMentoring} = mentoringController(userId)

    return (
        <div>
            <Create
                onCreateMentoring={onCreateMentoring}

            />
        </div>
    )
};

export default CreateContainer;
