// import React, { CreateContext, useContext, useReducer } from "react";

// //prepares the datalayer
// export const StateContext = CreateContext();

// //wrap our app and provide the datalayer
// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// // pull information from the datalayer
// export const useStateValue = () => useContext(StateContext);
