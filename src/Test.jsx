import React from 'react'
import { useSelector } from "react-redux";

const Test = () => {
    let data = useSelector((state) => state.userInfo.value);
  return (
    <div>
      <h1>Batch: {data}</h1>
    </div>
  );
}

export default Test