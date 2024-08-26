import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "rajibul islam",
  batch: "mern 2308"
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLoginInfo: (state, action) => {
      let payload = action.payload
        state.fullName=payload.fullName;
        state.batch=payload.batch;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;
