"use server";
import {createServerClient} from '@supabase/ssr';
import {Database} from "@/types/supabase";
import {cookies} from "next/headers";

export const createServerSideClient = async (serverComponent = false) => {
    const cookieStore = cookies();

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get: (key) => cookieStore.get(key)?.value,
                set: (key, value, options) => {
                    if (serverComponent) return;
                    cookieStore.set(key, value, options);
                },
                remove: (key, options) => {
                    if (serverComponent) return;
                    cookieStore.set(key, "", options);
                },
            },
        }
    );
};


