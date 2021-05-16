import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstName = "Mark";
  const lastName = "Stahl";

  const firstNameField = screen.getByLabelText(/first name/i);
  const lastNameField = screen.getByLabelText(/last name/i);
  const checkoutButton = screen.getByText("Checkout");

  expect(firstNameField).toBeInTheDocument();
  expect(lastNameField).toBeInTheDocument();
  expect(checkoutButton).toBeInTheDocument();

  userEvent.type(firstNameField, firstName);
  userEvent.type(lastNameField, lastName);
  userEvent.click(checkoutButton);

  const checkoutMessage = screen.getByText(/you have ordered/i);
  const checkoutName = screen.getByText(/mark stahl/i);
  expect(checkoutName).toBeInTheDocument();
  expect(checkoutMessage).toBeInTheDocument();
});