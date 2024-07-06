"use server";

import {createServerSideClient} from "@/lib/supabase";

export const createOrs = async (
    individual: number,
    interpersonal: number,
    social: number,
    overall: number,
    user_id: string
) => {
    const supabase = await createServerSideClient();
    const result = await supabase.from("ors")
        .insert({
            individual,
            interpersonal,
            social,
            overall,
            user_id
        })
        .select();
    return result.data;
}


