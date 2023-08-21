import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../util";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(
    dayjs().month()
  );
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const {
    monthIndex,
    setSmallCalendarMonth,
    setDaySelected,
    daySelected,
  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }
  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }

  // Generate an array of Day.js date objects for the current month
  const daysInMonth = [];
  const startOfMonth = dayjs(new Date(2023, currentMonthIdx, 1));
  const endOfMonth = startOfMonth.endOf('month');

  for (let day = startOfMonth; day <= endOfMonth; day = day.add(1, 'day')) {
    daysInMonth.push(day);
  }

  // Calculate the number of rows needed based on the number of days in the month
  const numRows = Math.ceil(daysInMonth.length / 7);

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(2023, currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className={`grid grid-cols-7 grid-rows-${numRows}`}>
        {daysInMonth.map((day, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSmallCalendarMonth(currentMonthIdx);
              setDaySelected(day);
            }}
            className={`py-1 w-full ${getDayClass(day)}`}
          >
            <span className="text-sm">{day.format("D")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
