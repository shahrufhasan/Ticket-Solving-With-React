import React from "react";
import Container from "../Container/Container";
import bgImg from "../../assets/vector1.png";

const CounterBox = ({ selectedCards, completeCard }) => {
  return (
    <Container>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 my-20">
        <div
          className="h-62 rounded-lg flex justify-between items-center 
        bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          <div>
            <img src={bgImg} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">In Progress</h2>
            <span className="text-6xl font-semibold">
              {selectedCards.length}
            </span>
          </div>
          <div>
            <img src={bgImg} className="scale-x-[-1]" alt="" />
          </div>
        </div>
        <div
          className="h-62 rounded-lg flex justify-between items-center
         bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white"
        >
          <div>
            <img src={bgImg} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">Resolved</h2>
            <span className="text-6xl font-semibold">
              {completeCard.length}
            </span>
          </div>
          <div>
            <img src={bgImg} className="scale-x-[-1]" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CounterBox;
