import {createOrs, getOrsList} from "@/actions/ors/ors.action";


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

    const orsList = async (userId: string) => {
        const orsList = await getOrsList(userId);
        console.log("orsList", orsList);
        return orsList as any[];
    }

    return {onCreateOrs, orsList};
}

export default OrsController;
