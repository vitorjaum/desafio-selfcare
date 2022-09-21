import React from "react";

function Icon(src) {
  return (
    <>
      <img src={src} alt="" onClick={() => console.log("hey")} />
    </>
  );
}

export default Icon;
