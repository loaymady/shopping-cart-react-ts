import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interface";
import axiosInstance from "../../config/axios.config";
import { RootState } from "../store";

interface ProductsState {
  data: {
    products: IProduct[];
  };
  loading: boolean;
  error: { message: string } | null;
}

const initialState: ProductsState = {
  data: { products: [] },
  loading: true,
  error: null,
};

export const getProductsList = createAsyncThunk(
  "products/getProductsList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    //Get the data from the API
    try {
      const { data } = await axiosInstance.get(
        `/products?limit=10&select=title,price,thumbnail`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products", // ** Attached with Store
  initialState,
  reducers: {},
  extraReducers: {
    //Pending
    [`${getProductsList.pending}`]: (state) => {
      state.loading = true;
    },
    //Fulfilled
    [`${getProductsList.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    //Rejected
    [`${getProductsList.rejected}`]: (state, action) => {
      state.loading = false;
      state.data = { products: [] };
      // action.payload => const { rejectWithValue } = thunkAPI;   return rejectWithValue(error);
      state.error = action.payload;
    },
  },
});

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
