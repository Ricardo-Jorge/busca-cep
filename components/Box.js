import React from "react";

const Box = (props) => {
  return (
    <div className="border border-dark mb-3">
      <h2 className="bg-dark text-white text-center">{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Box;
