import React, { useState } from "react";
import Test from "./Test";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "./slices/userSlice";

const App = () => {
  let dispatch = useDispatch();
  let [batch, setBatch] = useState("");

  let handleSubmit = () => {
    dispatch(userLoginInfo(batch));
  };

  return (
    <div className="w-[500px] mx-auto text-center mt-10">
      <input
        type="text"
        className="border px-2 py-1"
        onChange={(e) => setBatch(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} className="bg-teal-300 mt-2 px-2 py-1">
        Submit
      </button>
      <Test />
    </div>
  );
};

export default App;
