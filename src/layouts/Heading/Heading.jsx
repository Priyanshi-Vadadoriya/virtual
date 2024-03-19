import React from "react";

const Heading = ( props ) => {
  return (
    <div>
      <h2 className="display-6">{props.title}</h2>
      <div className="heading-line m-auto my-3"></div>
    </div>
  );
};

export default Heading;
