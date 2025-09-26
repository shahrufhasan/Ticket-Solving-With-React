import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TicketSection from "./components/TicketSection/TicketSection";
import { ToastContainer } from "react-toastify";

// Simple loader component
const Loader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    <span className="ml-4 text-blue-600 font-semibold text-lg">
      Loading Data...
    </span>
  </div>
);

// Fetching data
const fetchIssues = async () => {
  const result = await fetch("./data.json");
  return result.json();
};

const App = () => {
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <TicketSection fetchPromise={fetchPromise} />
      </Suspense>
      <Footer />
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;
