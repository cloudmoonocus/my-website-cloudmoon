import React, { ReactDOM } from "react";
import { Analytics } from "@vercel/analytics/react";

interface Props {
  children: ReactDOM;
}

const Root: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
};

export default Root;
