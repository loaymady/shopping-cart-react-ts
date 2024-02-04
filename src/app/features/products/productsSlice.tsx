import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  //name of the slice = name in const cartSlice = createSlice({ name: "cart",
  reducerPath: "products",
  //= queryKey in react-query, for caching
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //return hook for fetching data
    getProductList: builder.query({
      query: () => {
        return {
          // => {baseURl}/products
          url: "/products?limit=10&select=title,price,thumbnail",
        };
      },
    }),
  }),
});
export const productApiSlice = createApi({
  //name of the slice = name in const cartSlice = createSlice({ name: "cart",
  reducerPath: "productId",
  //= queryKey in react-query, for caching
  tagTypes: ["ProductId"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //return hook for fetching data
    getProduct: builder.query({
      query: (arg) => {
        return {
          // => {baseURl}/products
          url: `/products/${arg.id}?select=title,price,thumbnail`,
        };
      },
    }),
  }),
});

//useGetProductListQuery is a hook that can be used to fetch products
export const { useGetProductListQuery } = productsApiSlice;
//useGetProductQuery is a hook that can be used to fetch product
export const { useGetProductQuery } = productApiSlice;
