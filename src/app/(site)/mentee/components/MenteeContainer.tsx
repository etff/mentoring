import Main from "@/components/ui/mentee/Main";
import {User} from "@supabase/auth-js";

type Props = {
    user: User | null;
}

const MenteeContainer = ({user}: Props) => {
    return (
        <div>
            <Main user={user}/>
        </div>
    )
};

export default MenteeContainer;
