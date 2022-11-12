import { IconContext } from "react-icons";

type Props = {
  children: React.ReactNode;
};

export const IconProvider: React.FC<Props> = ({ children }) => {
  return (
    <IconContext.Provider
      value={{
        style: {
          verticalAlign: "middle",
          fontSize: "24px",
        },
      }}
    >
      {children}
    </IconContext.Provider>
  );
};
