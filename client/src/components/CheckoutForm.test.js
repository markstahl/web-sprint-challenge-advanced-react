import React from "react";
import {render, waitFor, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm /> );
    expect(getByText("Checkout Form")).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
    const fillform = {
        firstName: "Mark",
        lastName: "Stahl",
        address: "600 Broad St",
        city: "Riverton",
        state: "NJ",
        zip:"08077"
    }
    const {getByText, getByTestId} = render( <CheckoutForm /> );
    await waitFor(() => {
        fireEvent.input(getByText(/First Name/i), `${fillform.firstName}`);
        fireEvent.input(getByText(/Last Name/i), `${fillform.lastName}`);
        fireEvent.input(getByText(/Address/i), `${fillform.address}`);
        fireEvent.input(getByText(/City/i), `${fillform.city}`);
        fireEvent.input(getByText(/State/i), `${fillform.state}`);
        fireEvent.input(getByText(/Zip/i), `${fillform.zip}`);
        fireEvent.click(getByTestId("checkout"));
    });
    expect(getByTestId("successMessage")).toBeTruthy();
});
