import {getUser} from "@/actions/auth/user.action";
import StartContainer from "@/app/(site)/mentor/start/components/StartContainer";

const page = async () => {
    const user = await getUser({serverComponent: true});
    return (
        <main>
            <StartContainer userId={user?.id!!}/>
        </main>
    )

}

export default page;
