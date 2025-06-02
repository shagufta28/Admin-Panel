// Marketplace.jsx
import { Grid, Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const addons = [
  { title: 'Current Affairs & Daily News', price: '₹6,999/-', original: '₹10,000/-', desc: 'Stay informed...', purchased: true },
  { title: 'Daily Quizzes', price: '₹6,999/-', original: '₹10,000/-', desc: 'Engage students...', purchased: false },
  { title: 'Discount Coupon Creation', price: '₹6,999/-', original: '₹10,000/-', desc: 'Design personalized coupons...', purchased: false },
  // ... add all other cards here
];

export default function Marketplace() {
  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>Essential Add-Ons</Typography>
      <Grid container spacing={2}>
        {addons.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                <Box mt={2}>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>{item.original}</Typography>
                  <Typography variant="h6" color="primary">{item.price}</Typography>
                </Box>
                {item.purchased ? (
                  <Chip label="✓ Purchased" color="success" sx={{ mt: 1 }} />
                ) : (
                  <Button fullWidth variant="contained" startIcon={<ShoppingCartIcon />} sx={{ mt: 1 }}>Buy Now</Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
