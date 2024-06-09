import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for staff/admin login
export const StaffAdminLoginThunk = createAsyncThunk(
    "staff-admin-login",
    async (userCredObj, thunkApi) => {
        try {
            let res;
            console.log("first get ", userCredObj);
            if (userCredObj.userType === "staff") {
                res = await axios.post("http://localhost:4000/staff-api/login", userCredObj);
            } else if (userCredObj.userType === "admin") {
                res = await axios.post("http://localhost:4000/admin-api/login", userCredObj);
            }
            console.log(res);
            if (res.data.message === "login success") {
                // Store token in local storage
                localStorage.setItem("token", res.data.token);
                // Return user data
                return res.data;
            } else {
                return thunkApi.rejectWithValue(res.data.message);
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

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
            })
            .addCase(StaffAdminLoginThunk.rejected, (state, action) => {
                state.isPending = false;
                state.currentUser = {};
                state.loginUserStatus = false;
                state.errMsg = action.payload || "An error occurred";
                state.errorOccurred = true;
            });
    },
});

// Export action creator functions
export const { resetState } = staffAdminSlice.actions;
// Export root reducer of this slice
export default staffAdminSlice.reducer;
