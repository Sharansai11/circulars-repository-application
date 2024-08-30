import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for staff/admin login
export const StaffAdminLoginThunk = createAsyncThunk(
  "staff-admin-login",
  async (userCredObj, thunkApi) => {
    console.log("thunk object", userCredObj);
    try {
      if (userCredObj.userType === "staff") {
        const res = await axios.post(
          "http://localhost:4000/staff-api/login",
          userCredObj
        );
        if (res.data.message === "login success") {
          //store token in local/session storage
          localStorage.setItem("token", res.data.token);

          //return data
        } else {
          return thunkApi.rejectWithValue(res.data.message);
        }
        return res.data;
      }
      if (userCredObj.userType === "admin") {
        const res = await axios.post(
          "http://localhost:4000/admin-api/login",
          userCredObj
        );
        if (res.data.message === "login success") {
          //store token in local/session storage
          localStorage.setItem("token", res.data.token);
        } else {
          return thunkApi.rejectWithValue(res.data.message);
        }
        return res.data;
      }
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  });


export const staffAdminSlice = createSlice({
  name: "staff-admin-login",
  initialState: {
    isPending: false,
    loginUserStatus: false,
    currentUser: {},
    errorOccurred: false,
    errMsg: "",
  },
  reducers: {
    resetState: (state) => {
      state.isPending = false;
      state.currentUser = {};
      state.loginUserStatus = false;
      state.errorOccurred = false;
      state.errMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(StaffAdminLoginThunk.pending, (state) => {
        state.isPending = true;
      })
      .addCase(StaffAdminLoginThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.currentUser = action.payload.user; // Ensure 'user' exists in response
        state.loginUserStatus = true;
        state.errMsg = "";
        state.errorOccurred = false;
        console.log("Login successful", state.currentUser);
      })
      .addCase(StaffAdminLoginThunk.rejected, (state, action) => {
        state.isPending = false;
        state.currentUser = {};
        state.loginUserStatus = false;
        state.errMsg = action.payload || "An error occurred";
        state.errorOccurred = true;
        console.log("Login failed", state.errMsg);
      });

  },
});

// Export action creator functions
export const { resetState } = staffAdminSlice.actions;
// Export root reducer of this slice
export default staffAdminSlice.reducer;
