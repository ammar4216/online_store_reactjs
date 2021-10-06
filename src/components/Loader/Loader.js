import React from "react";
import loader from "./loading.gif";

function Loader() {
  return (
    <div style={useStyle}>
      <img src={loader} alt="Loading..." />
    </div>
  );
}

const useStyle = {
  width: "100%",
  height: "74vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default Loader;
