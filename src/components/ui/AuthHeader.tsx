"use client";
import {FcGoogle} from "react-icons/fc";
import {IoPeople} from "react-icons/io5";
import {MdLogout} from "react-icons/md";
import {createSupabaseBrowserClient} from "@/lib/client/supabase";
import {useRouter} from "next/navigation";
import {User} from "@supabase/auth-js";

interface AuthHeaderProps {
    user?: User | null;
}

const AuthHeader = ({user}: AuthHeaderProps) => {
    const isLoggedIn = !!user?.email;
    const supabase = createSupabaseBrowserClient();
    const router = useRouter();

    const goToHome = () => {
        router.push("/");
    };

    const handleGoogleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
            },
        });
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    };

    return (
        <header className="h-[50px] bg-white">
            <section className="px-6 h-full">
                <div className="h-full flex flex-row justify-between items-center">
                    <div
                        onClick={goToHome}
                        className="flex flex-row items-center cursor-pointer gap-2"
                    >
                        MENTORING <IoPeople size={30}/>
                    </div>

                    {isLoggedIn ? (
                        <div
                            onClick={handleLogout}
                            className="flex flex-row items-center gap-2 cursor-pointer"
                        >
                            Logout
                            <MdLogout size={30}/>
                        </div>
                    ) : (
                        <div
                            onClick={handleGoogleLogin}
                            className="flex flex-row items-center gap-2 cursor-pointer"
                        >
                            Login
                            <FcGoogle size={30}/>
                        </div>
                    )}
                </div>
            </section>
        </header>
    );
}

export default AuthHeader;
