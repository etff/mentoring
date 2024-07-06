import {createOrs} from "@/actions/ors/ors.action";


const OrsController = (userId: string) => {

    const onCreateOrs = async (
        individual: number,
        interpersonal: number,
        social: number,
        overall: number
    ) => {
        await createOrs(
            individual,
            interpersonal,
            social,
            overall,
            userId
        );
    }

    return {onCreateOrs};
}

export default OrsController;
