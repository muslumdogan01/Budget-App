import React from "react";
import { HomeContext, useContext } from "../context/context";

const UserList = () => {
  const { users, setUsers } = useContext(HomeContext);
  const { date, setDate } = useContext(HomeContext);
  // console.log("a", date.toString("tr-TR"));
  const { deleteUser } = useContext(HomeContext);
  return (
    <div className="bg-white p-5 rounded-lg mt-5 mb-5">
      <div className="w-full flex flex-row bg-white p-5 border-b font-semibold text-xl text-center">
        <span className="basis-1/4"> Tarih </span>
        <span className="basis-1/4">isim</span>
        <span className="basis-1/4">Görev</span>
        <span className="basis-1/4">Gelir</span>
        <span className="basis-1/4">Gider</span>
        <span className="basis-1/4"></span>
      </div>
      {users.map((user, id) => {
        return (
          <div
            key={id}
            className="w-full flex flex-row bg-white p-5 border-b text-center"
          >
            <span className="basis-1/4"> {user.date.toString()} </span>
            <span className="basis-1/4">{user.name}</span>
            <span className="basis-1/4">{user.task}</span>
            <span className="basis-1/4">{user.income}</span>
            <span className="basis-1/4">{user.expence}</span>
            <span className="basis-1/4">
              <button
                type="button"
                class="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Sil
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
