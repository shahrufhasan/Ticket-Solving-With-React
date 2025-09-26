import React, { use, useState } from "react";
import Container from "../Container/Container";
import Card from "../Card/Card";
import CounterBox from "../CounterBox/CounterBox";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";

const TicketSection = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [selectedCards, setSelectedCards] = useState([]);
  const [data, setData] = useState(initialData);
  const [completeCard, setCompleteCard] = useState([]);

  const handleComplete = (issue) => {
    if (!completeCard.find((elem) => elem.id === issue.id)) {
      setCompleteCard([...completeCard, issue]);
      setSelectedCards(selectedCards.filter((elem) => elem.id !== issue.id));
      toast.success("Completed");
      setData(data.filter((elem) => elem.id !== issue.id));
    }
  };

  return (
    <div>
      <Container>
        <CounterBox
          data={data}
          selectedCards={selectedCards}
          completeCard={completeCard}
        ></CounterBox>

        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-4">
          <div className="md:col-span-9">
            <h1 className="text-3xl font-semibold text-gray-600 mb-4">
              Customer Section
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {data.map((issue, index) => (
                <Card
                  key={index}
                  issue={issue}
                  data={data}
                  setData={setData}
                  setSelectedCards={setSelectedCards}
                  selectedCards={selectedCards}
                ></Card>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="bg-white rounded-md p-4">
              <h1 className="text-3xl font-semibold text-gray-600 mb-4">
                Task Status
              </h1>

              {selectedCards.length > 0 ? (
                selectedCards.map((issue, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-2 rounded-md shadow-md mb-2"
                  >
                    <h2 className="font-semibold text-center mb-4">
                      {issue.title}
                    </h2>
                    <button
                      onClick={() => handleComplete(issue)}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full py-1.5 px-4 rounded"
                    >
                      Task Complete
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center mt-5">
                  <p className="text-gray-600 text-lg">No task in progress</p>
                  <p className="text-gray-400 text-md font-thin">
                    Click on a ticket to start working
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-md p-4">
              <h1 className="text-3xl font-semibold text-gray-500 mb-4">
                Resolved Task
              </h1>

              {completeCard.length > 0 ? (
                completeCard.map((issue, index) => (
                  <div
                    key={index}
                    className="bg-green-100 p-1.5 rounded-md shadow mb-2"
                  >
                    <h3 className="font-semibold text-center mb-2">
                      {issue.title}
                    </h3>
                    <div className="flex justify-between mt-4">
                      <p className="text-green-500 flex items-center gap-1">
                        <IoCheckmarkDoneCircleSharp className="text-xl" />
                        Completed
                      </p>
                      <button className="text-gray-500 font-thin flex items-center gap-1">
                        <MdCancel />
                        Click To Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-md font-thin text-center">
                  No tasks resolved yet
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TicketSection;
