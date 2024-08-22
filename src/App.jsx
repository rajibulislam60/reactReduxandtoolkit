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
    <div>
      <input
        type="text"
        className="border"
        onChange={(e) => setBatch(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-teal-300">
        Submit
      </button>
      <Test />
    </div>
  );
};

export default App;
