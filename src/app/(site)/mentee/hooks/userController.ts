import {getProfileById} from "@/actions/auth/user.action";
import {useEffect, useState} from "react";
import {Database} from "@/types/supabase";

type ProfileDto = Database["public"]["Tables"]["profiles"]["Row"];

const UserController = (userId: string) => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState<ProfileDto | null>();

    const fetchProfile = async () => {
        setLoading(true);
        try {
            const resultProfile = await getProfileById({userId})

            if (resultProfile) {
                setProfile(resultProfile);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [userId]);

    return {loading, profile};
}

export default UserController;
