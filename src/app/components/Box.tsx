import { PropsWithChildren } from "react";

export const Box = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        margin: "20px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        maxWidth: "900px",
        minWidth: "150px",
      }}
    >
      {children}
    </div>
  );
};
