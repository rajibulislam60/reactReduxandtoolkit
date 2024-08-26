import React, { useState } from "react";
import Test from "./Test";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "./slices/userSlice";

const App = () => {
  let dispatch = useDispatch();
  let [fullName, setFullName] = useState("");
  let [batch, setBatch] = useState("")

  let handleSubmit = () => {
    dispatch(userLoginInfo({fullName, batch}));
  };

  return (
    <div className="flex flex-col items-center justify-center w-[500px] mx-auto mt-10 shadow-xl border">
      <form>
        <div className="mt-5">
          <label className="block">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="border px-2 py-1"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="block">Batch Name</label>
          <input
            type="text"
            name="batch"
            className="border px-2 py-1"
            onChange={(e) => setBatch(e.target.value)}
          />
        </div>
      </form>

      <button
        onClick={handleSubmit}
        className="bg-teal-300 mt-3 rounded px-2 py-1"
      >
        Add
      </button>
      <Test />
    </div>
  );
};

export default App;
