import React from 'react'
import { useSelector } from "react-redux";

const Test = () => {
    let data = useSelector((state) => state.userInfo.value);
    
  return (
    <div>
      <h2 className='mt-[70px]'>Batch: {data}</h2>
    </div>
  );
}

export default Test