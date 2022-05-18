import React, { useState, useEffect } from "react";
import Income from "../components/Income";
import Expense from "../components/Expense";
import TotalAmount from "../components/TotalAmount";
import UserList from "../components/UserList";
import RegistrationTable from "../components/RegistrationTable";
// import { MainContext, useContext } from '../context/context'
import { app, db } from "../FirebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { HomeContext } from "../context/context";

const Home = () => {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [income, setIncome] = useState(0);
  const [expence, setExpence] = useState(0);
  const [date, setDate] = useState(new Date());

  const [users, setUsers] = useState([]);
  console.log("helçö", users);
  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      name: name,
      task: task,
      income: Number(income),
      expence: Number(expence),
      date: Date(date),
    });
  };

  // const updateUser = async (id, name, task, income, expence, date) => {
  //   await userCollectionRef.doc(id).update({
  //     name: name,
  //     task: task,
  //     income: Number(income),
  //     expence: Number(expence),
  //     date: Date(date),
  //   });
  // };

  const deleteUser = async (id) => {
    const userDoc = doc(db,"users",id);
    await deleteDoc(userDoc);
  };


  const state = {
    name,
    setName,
    task,
    setTask,
    income,
    setIncome,
    expence,
    setExpence,
    date,
    setDate,
    users,
    setUsers,
    deleteUser
  };

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);

  return (
    <HomeContext.Provider value={state}>
      <main className="container flex flex-col mx-auto">
        <div class="flex flex-row pt-5 text-lg ">
          <div class="basis-2/4 ">
            <Income />
          </div>
          <div class="basis-2/4">
            <Expense />
          </div>
          <div class="basis-1/2">
            <TotalAmount />
          </div>
        </div>
        <div class="flex flex-row pt-10 justify-center  items-center text-center">
          <RegistrationTable />
        </div>
        <div className="flex justify-center items-center pt-3">
          <button
            onClick={createUser}
            type="submit"
            className="inline-flex justify-center text-lg py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-headerBg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>

        <UserList />
      </main>
    </HomeContext.Provider>
  );
};

export default Home;
