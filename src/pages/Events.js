import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./Events.css";

const Events = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="events">
      <div className="upcoming">
        <h2>Upcoming Events</h2>
        <p>No upcoming events yet. Stay tuned : &#41;</p>
      </div>
      <div className="calendar">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Events;
