import React, { useState } from "react";
import Test from "./Test";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "./slices/userSlice";

const App = () => {
  let dispatch = useDispatch();
  let [fullName, setFullName] = useState("");

  let handleSubmit = () => {
    dispatch(userLoginInfo(fullName));
  };

  return (
    <div className="w-[500px] mx-auto text-center mt-10 shadow-xl border">
      <input
        type="text"
        className="border px-2 py-1 mt-5"
        onChange={(e) => setFullName(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} className="bg-teal-300 mt-3 rounded px-2 py-1">
        Add
      </button>
      <Test />
    </div>
  );
};

export default App;
