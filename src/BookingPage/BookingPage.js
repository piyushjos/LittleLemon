import { React, useReducer, useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {fetchAPI} from "../api";


export const initializeTimes = () => {
    return fetchAPI(new Date());
  };

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
          console.log("current selected date",action.date)
          return fetchAPI(action.date); 
        default:
          return state;
      }
};

const BookingPage = () => {
 
  


  
  return (
    <>
      <NavBar />
      <BookingForm
      />
      <Footer />
    </>
  );
};
export default BookingPage;
