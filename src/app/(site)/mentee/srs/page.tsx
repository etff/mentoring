import {getUser} from "@/actions/auth/user.action";
import SrsContainer from "@/app/(site)/mentee/srs/components/SrsContainer";

const page = async () => {
    const user = await getUser({serverComponent: true});
    return (
        <main>
            <SrsContainer userId={user?.id!!}/>
        </main>
    )

}

export default page;
