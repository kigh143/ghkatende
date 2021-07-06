// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const Key = "";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://api.airtable.com/v0/",
//     prepareHeaders(headers) {
//       headers.set("x-api-key", Key);
//       return headers;
//     },
//   }),
//   endpoints(builder) {
//     return {
//         fetchBreeds: builder.query<Email[], number|void> ({
//             query(limit =10){
//                 return "/breeds?limit="+limit
//             },
//        }),
//     };
//   }
// });
