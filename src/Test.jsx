import React from 'react'
import { useSelector } from "react-redux";

const Test = () => {
    let data = useSelector((state) => state.userInfo.value);
    
  return (
    <div>
      <h1 className='mt-10 mb-3'>Full Name: {data}</h1>
    </div>
  );
}

export default Test