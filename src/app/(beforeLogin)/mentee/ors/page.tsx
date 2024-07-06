import OrsContainer from "@/app/(beforeLogin)/mentee/ors/components/OrsContainer";
import {useRouter} from "next/navigation";
import {getUser} from "@/actions/auth/user.action";

type Props = {
    userId: string;
}
const page = async () => {
    const user = await getUser({ serverComponent: true });
    return (
        <main>
            <OrsContainer userId={user?.id!!}/>
        </main>
    )

}

export default page;
