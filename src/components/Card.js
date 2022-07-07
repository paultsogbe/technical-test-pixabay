import React from "react";

const Card = ({ data }) => {
  return (
    <div
      onClick={() => window.open(`${data.pageURL}`, "_blank")}
      className="w-60 pt-0 pr-1.5 pb-4 cursor-pointer"
    >
      <div>
        <img alt={data.id} src={data.previewURL} />
      </div>
    </div>
  );
};

export default Card;
