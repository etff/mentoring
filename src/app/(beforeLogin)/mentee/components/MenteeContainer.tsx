import Main from "@/components/ui/mentee/Main";
import orsController from "..//hooks/orsController";

type Props = { };
const MenteeContainer = () => {
    const {onCreateOrs} = orsController();
    return (
        <div>
            <Main />
        </div>
    )
};

export default MenteeContainer;