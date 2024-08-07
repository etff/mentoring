"use server";

import {createServerSideClient} from "@/lib/supabase";

export const createOrs = async (
    individual: number,
    interpersonal: number,
    social: number,
    overall: number,
    userId: string
) => {
    const supabase = await createServerSideClient();
    const result = await supabase.from("ors")
        .insert({
            individual,
            interpersonal,
            social,
            overall,
            user_id: userId
        })
        .select();
    return result.data;
}


