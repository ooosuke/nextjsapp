import { useNotificationStore } from "@/stores/notifacations";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export const Notification: React.FC<{}> = ({}) => {
  const { notifacations } = useNotificationStore();
  const toast = useToast();
  useEffect(() => {
    if (notifacations.length) {
      notifacations.forEach(({ title, type, message }) => {
        toast({
          title,
          description: message,
          status: type,
          duration: 3000,
          isClosable: true,
        });
      });
    }
  }, [notifacations]);
  return <></>;
};
