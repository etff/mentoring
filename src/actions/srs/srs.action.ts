"use server";

import {createServerSideClient} from "@/lib/supabase";

export const createSrs = async (
    relationship: number,
    goals: number,
    approach: number,
    overall: number,
    userId: string
) => {
    const supabase = await createServerSideClient();
    const result = await supabase.from("srs")
        .insert({
            overall,
            relationship,
            approach,
            goals,
            user_id: userId,
        })
        .select();
    return result.data;
}


