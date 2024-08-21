import {getUser} from "@/actions/auth/user.action";
import FeedbackContainer from "@/app/(site)/mentee/feedback/components/FeedbackContainer";

const page = async () => {
    const user = await getUser({serverComponent: true});
    return (
        <main>
            <FeedbackContainer userId={user?.id!!}/>
        </main>
    )

}

export default page;
