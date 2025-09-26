import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({ issue, setSelectedCards, selectedCards, data, setData }) => {
  const handleClick = () => {
    if (!selectedCards.find((element) => element.id === issue.id)) {
      setSelectedCards([...selectedCards, issue]);
      toast.warn("In Process");
    }
    setData(
      data.map((elem) =>
        elem.id == issue.id ? { ...elem, status: "In Progress" } : elem
      )
    );
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow hover:bg-green-100 duration-400 ease-in-out m-5 rounded-md p-3 mb-9"
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{issue.title}</h2>
        <button
          className={`flex items-center gap-2 rounded-2xl px-3 ${
            issue.status === "Open"
              ? "bg-green-300 text-green-600"
              : "bg-yellow-200 text-yellow-600"
          }`}
        >
          <FaCircle
            className={`w-3 h-3 ${
              issue.status === "Open" ? "text-green-600" : "text-yellow-500"
            }`}
          />
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
