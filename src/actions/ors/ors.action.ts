"use server";

import {createServerSideClient} from "@/lib/supabase";
import {Database} from "@/types/supabase";

type OrsDto = Database["public"]["Tables"]["ors"]["Row"];

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

export const getOrsList = async (userId: string) => {
    const supabase = await createServerSideClient();
    const result = await supabase.from("ors")
        .select("*")
        .eq("user_id", userId);
    return result.data as OrsDto[];
}

