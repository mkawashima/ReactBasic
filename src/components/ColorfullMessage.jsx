import React from "react";

const ColorFullMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontize: "18px"
  };

  return (
    <>
      <p style={contentStyle}>props.children</p>
    </>
  );
};

export default ColorFullMessage;
