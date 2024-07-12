import OrsContainer from "@/app/(site)/mentee/ors/components/OrsContainer";
import {getUser} from "@/actions/auth/user.action";

type Props = {
    userId: string;
}
const page = async () => {
    const user = await getUser({serverComponent: true});
    return (
        <main>
            <OrsContainer userId={user?.id!!}/>
        </main>
    )

}

export default page;
