import { initializeTimes, updateTimes } from "./BookingPage";
import { render, screen } from "@testing-library/react";
import { fetchAPI } from "../api";
import BookingForm, { validate } from "./BookingForm";

test("initializeTimes returns the correct array of times", () => {
  const times = initializeTimes();

  expect(times.length > 1).toBe(true);
});

test("updateTimes returns updated times when action type is UPDATE_TIMES", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const date = new Date("2024, 8, 2");
  const action = { type: "UPDATE_TIMES", date };

  const updatedTimes = updateTimes(initialState, action);
  console.log("my updated times", updatedTimes);

  expect(updatedTimes.length).toBeGreaterThan(0);
});

describe("BookingForm HTML5 Validation", () => {
  test("Full Name input has required attribute", () => {
    render(<BookingForm />);
    const nameInput = screen.getByLabelText(/full name/i);
    expect(nameInput).toBeRequired();
  });

  test("Date input has required attribute", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });
  test("Guests input has min and max attributes", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("Occasion select has required attribute", () => {
    render(<BookingForm />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});
describe("BookingForm JavaScript Validation", () => {
  test("validate function returns error for empty Full Name", () => {
    const values = {
      name: "",
      date: "2024-09-03",
      time: "17:00",
      guest: 2,
      occasion: "Birthday",
    };
    const errors = validate(values);
    expect(errors.name).toBe("Full Name cannot be blank");
  });
  test("validate function returns error for empty date", () => {
    const values = {
      name: "John Doe",
      date: "",
      time: "17:00",
      guest: 2,
      occasion: "Birthday",
    };
    const errors = validate(values);
    expect(errors.date).toBe("Date is required");
  });

  test("validate function returns error for invalid guest count", () => {
    const values = {
      name: "John Doe",
      date: "2024-09-03",
      time: "17:00",
      guest: 11,
      occasion: "Birthday",
    };
    const errors = validate(values);
    expect(errors.guest).toBe("Number of guests must be between 1 and 10");
  });

  test("validate function returns no errors for valid inputs", () => {
    const values = {
      name: "John Doe",
      date: "2024-09-03",
      time: "17:00",
      guest: 2,
      occasion: "Birthday",
    };
    const errors = validate(values);
    expect(errors).toEqual({});
  });
});
