"use client"
import Ors from "@/components/ui/mentee/Ors";
import orsController from "@/app/(beforeLogin)/mentee/hooks/orsController";

const OrsContainer = () => {
    const {onCreateOrs} = orsController();
    return (
        <div>
            <Ors
                sharedUserFullName="test"
                onCreateOrs={onCreateOrs}
            />
        </div>
    )
};

export default OrsContainer;