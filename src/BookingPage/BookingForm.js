import { React, useState, useEffect, useReducer } from "react";
import styles from "./BookinForm.module.css";
import { submitAPI } from "../api";
import { Formik } from "formik";
import { fetchAPI } from "../api";
import { useNavigate } from 'react-router-dom';


export const initializeTimes = () => {
  return fetchAPI(new Date());
};

// Update times based on the selected date
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date);
    default:
      return state;
  }
};
export const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Full Name cannot be blank";
  }

  if (!values.date) {
    errors.date = "Date is required";
  }

  if (!values.time) {
    errors.time = "Time is required";
  }

  if (!values.guest) {
    errors.guest = "Number of guests is required";
  } else if (values.guest < 1 || values.guest > 10) {
    errors.guest = "Number of guests must be between 1 and 10";
  }

  if (!values.occasion) {
    errors.occasion = "Please select an occasion";
  }

  return errors;
};

const BookingForm = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();
 

  const handleSubmit = (values) => {
    if(submitAPI(values)){
      navigate("/bookingconfirm");
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          date: new Date().toISOString().split("T")[0],
          time: "17:00",
          guest: 1,
          occasion: "Birthday",
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          handleSubmit,
          isValid,
          dirty,
          touched,
          handleChange,
          values,
          setFieldValue,
        }) => (
          <div className={styles.container}>
            <form onSubmit={handleSubmit}>
              <div>
                <h1 className={styles.title}>Book Your Table</h1>
              </div>

              {/* Full Name */}
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={`${styles.inputbox} ${
                  errors.name && touched.name ? styles["input-error"] : ""
                }`}
                required
              />
              {errors.name && touched.name && (
                <div className={styles.error}>{errors.name}</div>
              )}

              <label htmlFor="res-date">Choose Date</label>
              <input
                type="date"
                id="res-date"
                name="date"
                value={values.date}
                onChange={(e) => {
                  handleChange(e);
                  const selectedDate = new Date(e.target.value);
                  dispatch({ type: "UPDATE_TIMES", date: selectedDate });
                  setFieldValue("time", "");
                }}
                className={`${styles.inputbox} ${
                  errors.date && touched.date ? styles["input-error"] : ""
                }`}
                required
              />
              {errors.date && touched.date && (
                <div className={styles.error}>{errors.date}</div>
              )}

              <label htmlFor="res-time">Choose Time</label>
              <select
                id="res-time"
                name="time"
                value={values.time}
                onChange={handleChange}
                min="1"
                max="10"
                className={`${styles.inputbox} ${
                  errors.time && touched.time ? styles["input-error"] : ""
                }`}
              >
                <option value="" label="Select time" />
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && touched.time && (
                <div className={styles.error}>{errors.time}</div>
              )}

              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guest"
                value={values.guest}
                min="1"
                max="10"
                onChange={handleChange}
                className={`${styles.inputbox} ${
                  errors.guest && touched.guest ? styles["input-error"] : ""
                }`}
              />
              {errors.guest && touched.guest && (
                <div className={styles.error}>{errors.guest}</div>
              )}

              {/* Occasion */}
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={values.occasion}
                onChange={handleChange}
                className={`${styles.inputbox} ${
                  errors.occasion && touched.occasion
                    ? styles["input-error"]
                    : ""
                }`}
                required
              >
                <option value="" label="Select occasion" />
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              {errors.occasion && touched.occasion && (
                <div className={styles.error}>{errors.occasion}</div>
              )}

              <input
                type="submit"
                value="Make Your Reservation"
                className={`${styles.btn} ${
                  !(dirty && isValid) ? styles["disabled-btn"] : ""
                }`}
                disabled={!(dirty && isValid)}
              />
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default BookingForm;
