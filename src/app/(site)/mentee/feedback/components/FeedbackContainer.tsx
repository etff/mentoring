"use client"
import {useEffect, useState} from "react";
import OrsController from "@/app/(site)/mentee/hooks/orsController";
import UserController from "@/app/(site)/mentee/hooks/userController";
import Feedback from "@/components/ui/mentee/Feedback";

type Props = {
    userId: string;
}

const FeedbackContainer = ({userId}: Props) => {
    const [orsList, setOrsList] = useState<any[]>([]);

    useEffect(() => {
        const fetchOrsList = async () => {
            const {orsList} = OrsController(userId);
            const list = await orsList(userId);
            setOrsList(list);
        };
        fetchOrsList();
    }, [userId]);
    const {profile} = UserController(userId);

    return (
        <div>
            <Feedback
                profile={profile}
                orsList={orsList}
            />
        </div>
    )
};

export default FeedbackContainer;
