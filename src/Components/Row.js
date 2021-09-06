import React from "react";

const Row = (props) => {
  const { rowNum, value, move } = props;
  return (
    <div className="row">
      {value.map((value, index) => {
        return (
          <div
            key={index}
            className={"column " + (value === "" ? "clickable" : "empty")}
            onClick={value === "" ? () => move(rowNum, index) : () => {}}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
