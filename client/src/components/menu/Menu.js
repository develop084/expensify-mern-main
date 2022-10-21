import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import "./menu.css";

const initialState = {
  amount: 0,
  description: "",
  date: new Date(),
};

export default function Menu({ clickfun, editTrx }) {
  
  const [form, setForm] = useState(initialState);


  useEffect(() => {
    if (editTrx !== {}) {
      setForm(editTrx);
    }
  }, [editTrx]);

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const dateHandler = (newValue) => {
    setForm({ ...form, date: newValue });
  };

  
  async function create() {
    const response = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }

  async function update() {
    const response = await fetch(
      `http://localhost:4000/transaction/${editTrx._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }

  async function submitHandler(e) {
    e.preventDefault();

    if (editTrx === {}) {
      create();
    } else {
      update();
    }
    clickfun();
    setForm(initialState);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Card sx={{ mt: 10, p: 5 }} className="container">
          <TextField
            type="number"
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            name="amount"
            value={form.amount}
            onChange={inputHandler}
          />

          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            value={form.description}
            onChange={inputHandler}
          />

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Select Date"
              value={form.date}
              name="date"
              onChange={dateHandler}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {editTrx.amount !== undefined && (
            <Button type="submit" variant="contained">
              Update
            </Button>
          )}
          {editTrx.amount === undefined && (
            <Button type="submit" variant="contained">
              Add
            </Button>
          )}
        </Card>
      </form>
    </div>
  );
}
