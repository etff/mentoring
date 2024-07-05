"use server";

import {createServerSideClient} from "@/lib/supabase";

// todoList 가져오기 + byId
export const getTodoById = async (id: number) => {
    const supabase = await createServerSideClient();
    const result = await supabase.from("ors")
        .select("*")
        .is("deleted_at", null)
        .eq("id", id);

    return result.data;
}

export const createOrs = async (
    individual: number,
    interpersonal: number,
    social: number,
    overall: number
) => {
    const supabase = await createServerSideClient();
    const result = await supabase.from("ors")
        .insert({
            individual,
            interpersonal,
            social,
            overall
        })
        .select();
    return result.data;
}


