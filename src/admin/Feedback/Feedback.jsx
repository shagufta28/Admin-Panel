import * as React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function Feedback() {
  const [startDate, setStartDate] = React.useState(dayjs('2025-05-03'));
  const [endDate, setEndDate] = React.useState(dayjs('2025-06-01'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" gap={2} p={2} bgcolor="#e0e0e0">
        <DatePicker
          label="Start date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          renderInput={(params) => <TextField size="small" {...params} />}
        />
        <DatePicker
          label="End date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          renderInput={(params) => <TextField size="small" {...params} />}
        />
        <TextField
          placeholder="Search exam name"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">▼</InputAdornment>
          }}
          sx={{ flex: 1 }}
        />
      </Box>
    </LocalizationProvider>
  );
}
