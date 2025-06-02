import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const DailyNews = () => {
  const [visibility, setVisibility] = useState('database');
    const [dateRange, setDateRange] = useState('');
  
    const handleRadioChange = (event) => {
      setVisibility(event.target.value);
    };
  
    return (
      <Box sx={{ p: 3 }}>
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">📡 Daily News Visibility</Typography>
            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <RadioGroup value={visibility} onChange={handleRadioChange}>
                <FormControlLabel
                  value="database"
                  control={<Radio />}
                  label="Show Database Daily News Only"
                />
                <FormControlLabel
                  value="owned"
                  control={<Radio />}
                  label="Show Owned Daily News"
                />
                <FormControlLabel
                  value="both"
                  control={<Radio />}
                  label="Show Both"
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
  
        <Card variant="outlined">
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight="bold">📚 Existing Daily News</Typography>
              <Button variant="contained" startIcon={<AddIcon />}>
                Create new
              </Button>
            </Box>
  
            <Box display="flex" alignItems="center" mt={3}>
              <TextField
                label="Search By Date"
                type="text"
                placeholder="e.g., May 1 - June 1"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                sx={{ mr: 2, width: '300px' }}
              />
              <Button variant="contained" color="primary">
                <SearchIcon />
              </Button>
            </Box>
  
            <Typography align="center" color="textSecondary" mt={5}>
              ☹️ No Daily News Available
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  };


export default DailyNews;
