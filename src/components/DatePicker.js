import React, { useState, useEffect } from "react";
import { HomeContext, useContext } from "../context/context";

const DatePicker = () => {
  const { date, setDate } = useContext(HomeContext);

  return (
    <div class="relative">
      <input
        onChange={(e) => setDate(e.target.value)}
        type="date"
        class="bg-gray-50 border border-gray-300 text-gray-900 md:text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p1 p-1
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
        placeholder="Select date"
      />
    </div>
  );
};

export default DatePicker;
