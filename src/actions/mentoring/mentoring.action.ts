"use server";

import {createServerSideClient} from "@/lib/supabase";

export const createMentoring = async (
    name: string,
    startDate: string,
    endDate: string,
    userId: string
) => {
    const supabase = await createServerSideClient();
    const result = await supabase.from("mentoring")
        .insert({
            name,
            start_date: startDate,
            end_date: endDate,
            user_id: userId,
        })
        .select();
    return result.data;
}


