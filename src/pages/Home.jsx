import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Button variant="contained" onClick={() => navigate('/admin')}>
        Go to Admin Panel
      </Button>
    </Box>
  );
}
