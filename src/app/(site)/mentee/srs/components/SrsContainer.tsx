"use client"
import SrsController from "@/app/(site)/mentee/hooks/srsController";
import UserController from "@/app/(site)/mentee/hooks/userController";
import Srs from "@/components/ui/mentee/Srs";

type Props = {
    userId: string;
}

const SrsContainer = ({userId}: Props) => {
    const {onCreateSrs} = SrsController(userId);
    const {profile} = UserController(userId);

    return (
        <div>
            <Srs
                profile={profile}
                onCreateSrs={onCreateSrs}
            />
        </div>
    )
};

export default SrsContainer;
