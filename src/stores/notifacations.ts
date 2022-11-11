import { nanoid } from "nanoid";
import create from "zustand";

export type Notification = {
    id: string;
    type: "info" | "warning" | "success" | "error";
    title: string;
    message?: string;
};

type NotificationStore = {
    notifacations: Notification[];
    addNotifaction: (notifaction: Omit<Notification, "id">) => void;
    dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationStore>((set) => ({
    notifacations: [],
    addNotifaction: (notification) =>
        set((state) => ({
            notifacations: [
                ...state.notifacations,
                { id: nanoid(), ...notification },
            ],
        })),
    dismissNotification: (id) =>
        set((state) => ({
            notifacations: state.notifacations.filter(
                (notification) => notification.id !== id
            ),
        })),
}));
