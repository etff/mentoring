import {createOrs} from "@/apis/ors";


const orsController = () => {

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
            overall
        );
    }

    return {onCreateOrs};
}

export default orsController;
