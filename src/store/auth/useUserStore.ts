import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface userState {
    userId: string;
    setUserId: (newUserId: string) => void;
    userName: string;
    setUserName: (newUserName: string) => void;
}

const useUserStore = create(
    persist<userState>(
        (set) => ({
            userId: "",
            setUserId: (newUserId) => set({userId: newUserId}),
            userName: "",
            setUserName: (newUserName) => set({userName: newUserName}),
        }),

        {
            name: "user-storage",
        },
    ),
);

export default useUserStore;
