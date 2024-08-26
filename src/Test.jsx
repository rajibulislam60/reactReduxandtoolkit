import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const { fullName, batch } = useSelector((state) => state.userInfo);

  return (
    <div>
      <h1 className="mt-10">Full Name: {fullName}</h1>
      <h2 className="mb-3">Batch Name: {batch}</h2>
    </div>
  );
};

export default Test;
