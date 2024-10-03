import {createMentoring} from "@/actions/mentoring/mentoring.action"


const mentoringController = (userId: string) => {

    const onCreateMentoring = async (
        name: string,
        startDate: string,
        endDate: string
    ) => {
        const result = await createMentoring(
            name,
            startDate,
            endDate,
            userId
        );
    }
    return {onCreateMentoring};
}

export default mentoringController;
