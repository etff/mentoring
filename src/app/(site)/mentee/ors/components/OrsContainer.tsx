"use client"
import Ors from "@/components/ui/mentee/Ors";
import OrsController from "@/app/(site)/mentee/hooks/orsController";
import UserController from "@/app/(site)/mentee/hooks/userController";

type Props = {
    userId: string;
}

const OrsContainer = ({userId}: Props) => {
    const {onCreateOrs} = OrsController(userId);
    const {profile} = UserController(userId);

    return (
        <div>
            <Ors
                profile={profile}
                onCreateOrs={onCreateOrs}
            />
        </div>
    )
};

export default OrsContainer;
