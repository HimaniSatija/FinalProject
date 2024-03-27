import { useReducer, FC } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import BookingForm from "../../components/BookingForm";
import Footer from "../../components/Footer";
import React from "react";

const BookingPage: FC = (): JSX.Element => {

  return (
    <Container>
      <Header />
      <BookingForm />
      <Footer />
    </Container>
  );
};

export default BookingPage;