import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";
import BookingPage from "./BookingPage/BookingPage";
import BookingConfimation from "./BookingConfimation/BookingConfirmation"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="reservetable" element={<BookingPage />}></Route>
        <Route path="/bookingconfirm" element={<BookingConfimation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


