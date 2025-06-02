// Marketing.jsx
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Paper, Link } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const marketingData = [
  {
    title: 'Test Series Coupons',
    language: 'English & Hindi',
    file: 'PSD & AI',
    size: '5.2 x 8 inch',
    use: 'Activation Key',
  },
  {
    title: 'Test Series Envelops',
    language: 'English & Hindi',
    file: 'PSD & AI',
    size: '4.83 x 9.25 inch',
    use: 'Activation Key',
  },
  {
    title: 'Test Series Posters',
    language: 'English & Hindi',
    file: 'PSD & AI',
    size: '11.6 x 16.5 inch',
    use: 'Advertisement',
  },
  {
    title: 'Test Series Pamphlet',
    language: 'English & Hindi',
    file: 'PSD & AI',
    size: '5.82 x 8.267 inch',
    use: 'Advertisement',
  },
  {
    title: 'Test Series Brochure',
    language: 'English',
    file: 'PPT & PDF',
    size: '13.933 x 7.50 inch',
    use: 'Advertisement',
  },
];

const Marketing = () => {
  return (
    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle1" fontWeight={600} mb={2}>
        Marketing Kit
      </Typography>
      <Grid container spacing={2}>
        {marketingData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card variant="outlined" sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography variant="body2">Language : {item.language}</Typography>
                <Typography variant="body2">Source File : {item.file}</Typography>
                <Typography variant="body2">Size : {item.size}</Typography>
                <Typography variant="body2" gutterBottom>
                  Used For : {item.use}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<CloudDownloadIcon />}
                  sx={{ mt: 1 }}
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={4}>
        <Typography variant="subtitle1" fontWeight={600}>
          Developer's Guide
        </Typography>
        <Box display="flex" gap={2} mt={2} flexWrap="wrap">
          <Link href="#" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CloudDownloadIcon color="primary" /> SSO
          </Link>
          <Link href="#" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CloudDownloadIcon color="primary" /> Flutter SSO SDK integration
          </Link>
          <Link href="#" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CloudDownloadIcon color="primary" /> Get Exam Details
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default Marketing;
