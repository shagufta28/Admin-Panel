import React from 'react'
import {
  Box, Grid, Paper, Typography, TextField, Button, MenuItem, Checkbox,
  FormControlLabel, Divider
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function Payment() {
  return (
    <Box sx={{ p: 2 }}>
      {/* Transactions Graph */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          📊 Transactions Graph
        </Typography>
        <Box
          sx={{
            height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed #ccc',
            borderRadius: 2,
          }}
        >
          <Typography color="text.secondary">😊 No Activity</Typography>
        </Box>
      </Paper>

      {/* Transactions Filter */}
      <Paper sx={{ p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2,
            flexWrap: { xs: 'wrap', sm: 'nowrap' },  // stack on mobile, row on PC
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ flexShrink: 0, width: { xs: '100%', sm: 'auto' } }}>
            🧾 Transactions
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              justifyContent: { xs: 'center', sm: 'flex-start' },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Show Activation Key Transactions"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            />
            <Button
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Payment Report Options
            </Button>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Totals */}
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          <b>Total Earnings:</b> ₹0 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
          <b>Total Transactions:</b> 0
        </Typography>

        {/* Filter Form */}
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'center',
          }}
        >
          {/* Each Grid item keeps xs=12 (full width on mobile) and sm=4 (3 columns on PC) */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Date"
              fullWidth
              value="May 2, 2025 - May 31, 2025"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="User Detail : Name, Email, Phone No." fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Transaction ID" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Device" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Package Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Coupon : Code, Serial No." fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Product Type"
              select
              fullWidth
              defaultValue="All"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Course">Course</MenuItem>
              <MenuItem value="Package">Package</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
            '& > button': {
              width: { xs: '100%', sm: 'auto' },
            },
          }}
        >
          <Button variant="contained" color="primary">
            Apply
          </Button>
          <Button variant="contained" color="error">
            Reset
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}
