import {getUser} from "@/actions/auth/user.action";
import CreateContainer from "@/app/(site)/mentor/create/components/CreateContainer";

const page = async () => {
    const user = await getUser({serverComponent: true});
    return (
        <main>
            <CreateContainer userId={user?.id!!}/>
        </main>
    )

}

export default page;
