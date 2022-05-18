import React, { useState, useEffect } from "react";
import DatePicker from "./DatePicker";
import { HomeContext,useContext } from "../context/context";

const RegistrationTable = () => {
  const {name, setName} = useContext(HomeContext)
  const {task, setTask} = useContext(HomeContext)
  const {income, setIncome} = useContext(HomeContext)
  const {expence, setExpence}= useContext(HomeContext)
  return (
    <>
      <div class="basis-1/3 flex justify-center items-center">
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 pt-2 block text-sm font-medium text-slate-700">
            Tarih
          </span>
          <span>
          <DatePicker />
          </span>
        </label>
      </div>
      <div class="basis-1/3 flex  justify-center items-center ">
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 text-lg after:text-red-500 block text-sm font-medium text-slate-700">
            İsim
          </span>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            class="mt-1 px-3 py-2 bg-white border  shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Name"
          />
        </label>
      </div>
      <div class="basis-1/3 flex justify-center items-center">
        <label class="block">
          <span class="after:content-['*'] text-lg after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Görev
          </span>
          <input
           onChange={(e)=> setTask(e.target.value)}
            value={task}
            type="text"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="task"
          />
        </label>
      </div>
      <div class="basis-1/3 flex justify-center items-center">
        <label class="block">
          <span class="after:content-['*'] text-lg after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Gelir
          </span>
          <input
           onChange={(e)=> setIncome(e.target.value)}
            value={income}
            type="number"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="income"
          />
        </label>
      </div>
      <div class="basis-1/3 flex justify-center items-center">
        <label class="block">
          <span class="after:content-['*'] text-lg after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Gider
          </span>
          <input
            onChange={(e)=> setExpence(e.target.value)}
            value={expence}
            type="number"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="expence"
          />
        </label>
      </div>
    </>
  );
};

export default RegistrationTable;
