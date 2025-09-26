import { createTheme, ThemeProvider } from "@mui/material/styles";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

import { StyledStaticDatePicker } from "./Calendar.styled";

const theme = createTheme();

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  return (
    <ThemeProvider theme={theme}>
      <StyledStaticDatePicker
        displayStaticWrapperAs="desktop"
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
      />
    </ThemeProvider>
  );
};

export default Calendar;
