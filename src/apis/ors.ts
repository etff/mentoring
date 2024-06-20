"use client";

import {createSupabaseBrowserClient} from "@/lib/client/supabase";

// todoList 가져오기 + byId
export const getTodoById = async (id: number) => {
    const supabase = createSupabaseBrowserClient();
    const result = await supabase.from("ors")
        .select("*")
        .is("deleted_at", null)
        .eq("id", id);

    return result.data;
}

export const createTodo = async (
    individual: number,
    interpersonal: number,
    social: number,
    overall: number
) => {
    const supabase = createSupabaseBrowserClient();
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


