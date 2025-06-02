import { Grid, Paper, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

const stats = [
  { label: 'Total Users', value: '24,582', icon: <PeopleIcon />, color: '#1976d2' },
  { label: 'Revenue', value: '$58,742', icon: <MonetizationOnIcon />, color: '#2e7d32' },
  { label: 'Sessions', value: '132,420', icon: <ShowChartIcon />, color: '#ed6c02' },
  { label: 'Conversion Rate', value: '4.7%', icon: <TrendingUpIcon />, color: '#d32f2f' },
]

export default function StatCards() {
  return (
    <Grid container spacing={2} sx={{ width: '100%', marginBottom: 5 }}>
      {stats.map((stat, index) => (
        <Grid
          item
          xs={3}  // 4 cards per row on mobile
          sm={3}
          md={3}
          key={index}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 1.5, sm: 3 },       // smaller padding on mobile
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              minWidth: 0,
              height: { xs: 70, sm: '100%' },  // smaller height on mobile
              minHeight: { xs: 70, sm: 100 },
              boxSizing: 'border-box',
            }}
          >
            <div style={{ color: stat.color, fontSize: 24 }}>{stat.icon}</div> {/* smaller icon on mobile */}
            <div>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                sx={{ fontSize: { xs: 12, sm: 'inherit' } }} // smaller text on mobile
              >
                {stat.label}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: 14, sm: 'inherit' } }}  // smaller value on mobile
              >
                {stat.value}
              </Typography>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
