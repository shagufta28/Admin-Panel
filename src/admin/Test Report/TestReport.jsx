// src/admin/Test Report/TestReport.jsx

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const mockTests = [
  "Algebraic Expressions-1",
  "Coordinate Geometry",
  "Active and Passive Voice Test - 1",
  "वाक्य परिवर्तन",
];

const TestReport = () => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [selectedTests, setSelectedTests] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleTestToggle = (test) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter((t) => t !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedTests([]);
    } else {
      setSelectedTests(mockTests);
    }
    setSelectAll(!selectAll);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        {/* Left: Global Ranking */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardHeader
              title="User Test Result"
              sx={{ background: "#f5f7fa", fontWeight: "bold" }}
            />
            <CardContent>
              <FormControlLabel
                control={<Checkbox checked />}
                label="Global Ranking"
              />
              <div style={{ fontSize: "0.875rem", color: "#555", marginTop: 8 }}>
                Enable/Disable global ranking for user portal. <br />
                By enabling this option, user rank will be calculated based on total students globally.
              </div>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#00bcd4", color: "#fff" }}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right: Test Report */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardHeader
              title="Test Report"
              sx={{ background: "#f5f7fa", fontWeight: "bold" }}
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={(newValue) => setStartDate(newValue)}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    label="End Date"
                    value={endDate}
                    onChange={(newValue) => setEndDate(newValue)}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </Grid>
              </Grid>

              <List dense sx={{ maxHeight: 150, overflowY: "auto", mt: 2 }}>
                {mockTests.map((test) => (
                  <ListItem
                    key={test}
                    button
                    onClick={() => handleTestToggle(test)}
                    sx={{ py: 0 }}
                  >
                    <Checkbox checked={selectedTests.includes(test)} />
                    <ListItemText primary={test} />
                  </ListItem>
                ))}
              </List>

              <FormControlLabel
                control={<Checkbox checked={selectAll} onChange={handleSelectAll} />}
                label="Select All Tests"
              />

              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#00bcd4", color: "#fff" }}
              >
                Download Sectional Report
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default TestReport;
