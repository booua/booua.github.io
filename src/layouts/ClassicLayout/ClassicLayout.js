import React from "react";
import Scrollbar from "smooth-scrollbar-react";
import VerticalNavbar from "../../components/VerticalNavbar";

const ClassicLayout = ({ children }) => {
  return (
    <section
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#0e0d0d",
      }}
    >
      <VerticalNavbar />
      <Scrollbar>{children}</Scrollbar>
    </section>
  );
};

export default ClassicLayout;
