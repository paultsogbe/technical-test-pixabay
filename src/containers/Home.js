import React from "react";

import Card from "../components/Card";

const Home = ({ data, isLoading }) => {
  return (
    <>
      <div className="w-4/5 flex flex-wrap m-auto mt-8">
        {data &&
          data.map((card, index) => {
            return <Card key={index} data={card} />;
          })}
      </div>
    </>
  );
};

export default Home;
