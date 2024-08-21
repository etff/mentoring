import {createSrs} from "@/actions/srs/srs.action";


const SrsController = (userId: string) => {

    const onCreateSrs = async (
        relationship: number,
        goals: number,
        approach: number,
        overall: number,
    ) => {
        const result = await createSrs(
            relationship,
            goals,
            approach,
            overall,
            userId
        );
    }

    return {onCreateSrs};
}

export default SrsController;
