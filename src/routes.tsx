import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import React from "react";

export default function () {
  return (
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<BookingPage/>} path="/table-booking"/>
      <Route element={<ConfirmationPage/>} path="/booking-confirmation"/>
    </Routes>
  );
};