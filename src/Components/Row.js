import React from "react";

const Row = (props) => {
  const { value } = props;
  return (
    <div className="row">
      {value.map((value, index) => {
        return (
          <div key={index} className="column">
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
