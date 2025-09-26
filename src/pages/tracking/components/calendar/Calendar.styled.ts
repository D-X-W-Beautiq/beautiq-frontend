import { styled } from "@mui/material/styles";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export const StyledStaticDatePicker = styled(StaticDatePicker)(({ theme }) => ({
  // 달력 전체 컨테이너
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,

  // 헤더 ('2025년 9월')
  "& .MuiPickersCalendarHeader-label": {
    fontWeight: 700,
  },

  // 날짜(Day) 아이템
  "& .MuiPickersDay-root": {
    // 선택된 날짜
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },

  // 오늘 날짜
  "& .MuiPickersDay-today": {
    borderColor: theme.palette.primary.light,
  },
}));
