import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CounterBox from "./components/CounterBox/CounterBox";
import TicketSection from "./components/TicketSection/TicketSection";

// Fetching data
const fetchIssues = async () => {
  const result = await fetch("./data.json");
  return result.json();
};
const App = () => {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h1>LoadingData.........</h1>}>
        <TicketSection fetchPromise={fetchPromise}></TicketSection>
      </Suspense>
      <Footer></Footer>
    </>
  );
};

export default App;
