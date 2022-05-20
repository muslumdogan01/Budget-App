import React from 'react'
import { HomeContext, useContext } from '../context/context';

const TotalAmount = () => {

  const { users, setUsers } = useContext(HomeContext);

  return (
    <div className='text-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col justify-center items-center'>
    <h1 className='text-headerBg font-bold p-1 text-xl underline underline-offset-4'>TOPLAM MALİYET</h1>
    <span className='text-slate-500 text-xl p-0'>
      {/* {users.reduce((total, user) => total + (user.expence + user.income), 0)} */}
      {users.reduce((total, user)=>(total = total + (user.income - user.expence)),0)}
    </span>
  </div>
  )
}

export default TotalAmount