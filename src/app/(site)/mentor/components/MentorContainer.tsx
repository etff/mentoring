import Main from "@/components/ui/mentor/Main";
import {User} from "@supabase/auth-js";

type Props = {
    user: User | null;
}

const MenteeContainer = () => {
    return (
        <div>
            <Main/>
        </div>
    )
};

export default MenteeContainer;