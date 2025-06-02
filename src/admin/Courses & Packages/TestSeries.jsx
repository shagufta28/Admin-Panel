import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const categories = [
  'Engineering Entrance',
  'Medical',
  'Banking',
  'Others',
  'Behavioural',
];

const defaultPackages = [
  { packageNo: 1, validity: 60, originalPrice: 1200, currentPrice: 600 },
  { packageNo: 2, validity: 90, originalPrice: 1500, currentPrice: 750 },
  { packageNo: 3, validity: 180, originalPrice: 1800, currentPrice: 900 },
  { packageNo: 4, validity: 365, originalPrice: 2200, currentPrice: 1100 },
];

const TestSeries = () => {
  const [priceData, setPriceData] = useState(
    categories.reduce((acc, cat) => {
      acc[cat] = defaultPackages.map((pkg) => ({
        ...pkg,
        newOriginalPrice: '',
        newCurrentPrice: '',
      }));
      return acc;
    }, {})
  );

  const handleChange = (category, index, field, value) => {
    const updated = [...priceData[category]];
    updated[index][field] = value;
    setPriceData({ ...priceData, [category]: updated });
  };

  const handleSubmit = (category, index) => {
    const pkg = priceData[category][index];
    alert(
      `Submitted for ${category}, Package ${pkg.packageNo}:\nNew Original Price: ₹${pkg.newOriginalPrice}\nNew Current Price: ₹${pkg.newCurrentPrice}`
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        🧪 Test Series Pricing Manager
      </Typography>

      {categories.map((category) => (
        <Accordion key={category} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 'bold' }}>{category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ overflowX: 'auto' }}>
              <Table size="small" sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Package No</TableCell>
                    <TableCell>Validity (days)</TableCell>
                    <TableCell>Original Price</TableCell>
                    <TableCell>Current Price</TableCell>
                    <TableCell>New Original Price</TableCell>
                    <TableCell>New Current Price</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {priceData[category].map((pkg, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{pkg.packageNo}</TableCell>
                      <TableCell>{pkg.validity}</TableCell>
                      <TableCell>₹{pkg.originalPrice}</TableCell>
                      <TableCell>₹{pkg.currentPrice}</TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          value={pkg.newOriginalPrice}
                          onChange={(e) =>
                            handleChange(category, idx, 'newOriginalPrice', e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          value={pkg.newCurrentPrice}
                          onChange={(e) =>
                            handleChange(category, idx, 'newCurrentPrice', e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleSubmit(category, idx)}
                          sx={{ borderRadius: 999 }}
                        >
                          Submit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default TestSeries;
