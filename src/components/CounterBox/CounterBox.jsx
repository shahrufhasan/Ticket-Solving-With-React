import React from "react";
import Container from "../Container/Container";

const CounterBox = ({ selectedCards, completeCard }) => {
  return (
    <Container>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 my-20">
        <div className="h-64 rounded-lg flex flex-col justify-center items-center bg-purple-400 bg-1 text-white">
          <h2 className="text-2xl font-bold">In Progress</h2>
          <span className="text-6xl font-semibold">{selectedCards.length}</span>
        </div>
        <div className="h-64 rounded-lg flex flex-col justify-center items-center bg-lime-500 text-white">
          <h2 className="text-2xl font-bold">Resolved</h2>
          <span className="text-6xl font-semibold">{completeCard.length}</span>
        </div>
      </div>
    </Container>
  );
};

export default CounterBox;
