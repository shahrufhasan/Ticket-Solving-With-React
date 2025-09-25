import React from "react";
import { SlCalender } from "react-icons/sl";

const Card = ({ issue, setSelectedCards, selectedCards }) => {
  const handleClick = () => {
    if (!selectedCards.find((element) => element.id === issue.id)) {
      setSelectedCards([...selectedCards, issue]);
    }
  };

  return (
    <div onClick={handleClick} className="bg-white m-5 rounded-md p-3">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{issue.title}</h2>
        <button
          className={`rounded-2xl px-3 ${
            issue.status == "Open"
              ? "bg-green-300"
              : issue.status == "InProgress"
              ? "bg-yellow-300"
              : "bg-red-300"
          }`}
        >
          {issue.status}
        </button>
      </div>
      <p className="text-md text-gray-600 font-thin my-2">
        {issue.description}
      </p>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <h3 className="text-gray-600 font-thin">#{issue.id}</h3>
          <h3
            className={`${
              issue.priority == "High"
                ? "text-red-500"
                : issue.priority == "Medium"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {issue.priority}
          </h3>
        </div>
        <div className="flex gap-4">
          <p className="text-gray-600 font-thin">{issue.customer}</p>
          <p className="text-gray-600 font-thin flex items-center gap-1">
            <SlCalender></SlCalender> {issue.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
