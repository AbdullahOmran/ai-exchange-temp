
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const registerUser: any = createAsyncThunk(
  "user/register",
  async (inputData, thunkAPI) => {
    try {
     
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      
      if (res.status === 201) {
        const data = await res.json();
        return data;
      } else if (res.status === 400) {
        return thunkAPI.rejectWithValue("This account already exists.");
      } else {
     
        return thunkAPI.rejectWithValue("Something went wrong.");
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue("Something went wrong.");
    }
  }
);
export const loginUser: any = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (res.status === 200) {
        const data = await res.json();
        return data;
      } else if (res.status === 404) {
        return thunkAPI.rejectWithValue("This account doesn't exist");
      } else if (res.status === 401) {
        return thunkAPI.rejectWithValue("This account doesn't exist");
      } else {
        return thunkAPI.rejectWithValue("Something went wrong.");
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue("Something went wrong.");
    }
  }
);

export const logout: any = createAsyncThunk(
  "user/logout",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        return data;
      } else {
        return thunkAPI.rejectWithValue("Something went wrong.");
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue("Something went wrong.");
    }
  }
);

export const retrieveUser: any = createAsyncThunk(
  "user/retrieveUser",
  async (_, thunkAPI) => {
    try {
     
      const res = await fetch("/api/users/me", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        return data;
      } else if (res.status === 404) {
        return thunkAPI.rejectWithValue("This account doesn't exist");
      } else {
        return thunkAPI.rejectWithValue("Something went wrong.");
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue("Something went wrong.");
    }
  }
);

export interface authState {
  user: any;
  status: "idle" | "pending" | "failed" | "succeeded";
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: authState = {
  user: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(logout.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(retrieveUser.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(retrieveUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(retrieveUser.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = false;
        state.error =null;
      })
      
  },
});

export const { setUser, setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
