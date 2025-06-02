import { Box } from '@mui/material'
import StatCards from '../../components/StatCards'
import Charts from '../../components/Charts'

export default function AdminDashboard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        py: 4,
        width: '100%',
        maxWidth: 1400,
        margin: '0 auto',
        overflowX: 'hidden',
        // Removed minHeight and overflowY here to allow natural page scroll
      }}
    >
      <StatCards />
      <Charts />
    </Box>
  )
}
