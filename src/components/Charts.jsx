import { Paper, Typography, Grid, Box, useMediaQuery, useTheme } from '@mui/material'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer
} from 'recharts'

const lineData = [
  { name: 'Mon', users: 400 },
  { name: 'Tue', users: 300 },
  { name: 'Wed', users: 500 },
  { name: 'Thu', users: 200 },
  { name: 'Fri', users: 600 },
  { name: 'Sat', users: 700 },
  { name: 'Sun', users: 650 },
]

const barData = [
  { name: 'Jan', sales: 2400 },
  { name: 'Feb', sales: 1398 },
  { name: 'Mar', sales: 9800 },
  { name: 'Apr', sales: 3908 },
  { name: 'May', sales: 4800 },
  { name: 'June', sales: 480 },
  { name: 'July', sales: 6000 },
  { name: 'August', sales: 2400 },
  { name: 'September', sales: 8280 },
  { name: 'October', sales: 7220 },
  { name: 'November', sales: 1300 },
  { name: 'December', sales: 4800 },
]

export default function Charts() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const chartHeight = isMobile ? 180 : 300
  const chartWidth = isMobile ? '90%' : '100%'

  return (
    <Grid
      container
      spacing={4}
      justifyContent={isMobile ? 'center' : 'flex-start'}
      sx={{
        width: '100%',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'center' : 'stretch',
      }}
    >
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            width: chartWidth,
            maxWidth: isMobile ? 360 : 'none',
          }}
        >
          <Typography variant="h6" gutterBottom>
            User Growth
          </Typography>
          <Box sx={{ width: '100%', height: chartHeight }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#1976d2"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            width: chartWidth,
            maxWidth: isMobile ? 360 : 'none',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Monthly Sales
          </Typography>
          <Box sx={{ width: '100%', height: chartHeight }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#2e7d32" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}
