import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [randomCatFact, setRandomCatFact] = useState("70% of your cat life is spent asleep!");

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  // Function to fetch a random cat fact from the API
  const fetchRandomCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setRandomCatFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />

        {/* Button container */}
        <div className="button-container">
          <button className="random-cat-fact-button" onClick={fetchRandomCatFact}>
            Click here to get more random cat fun facts
          </button>
        </div>

        {/* Display the random cat fact */}
        {randomCatFact && <p className="random-cat-fact">{randomCatFact}</p>}

        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
