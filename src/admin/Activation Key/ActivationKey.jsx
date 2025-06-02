import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ActivationKey = () => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [purchaseGroup, setPurchaseGroup] = useState('');
  const [quantity, setQuantity] = useState(1);

  const keyGroups = ['Group A', 'Group B', 'Group C'];

  const handleAllotChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const handlePurchaseChange = (event) => {
    setPurchaseGroup(event.target.value);
  };

  const handlePurchaseSubmit = () => {
    alert(`Purchased ${quantity} keys from ${purchaseGroup}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Activation Keys</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" color="primary">
                Test Series Activation Keys
              </Typography>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Card sx={{ mt: 3 }} variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🧩 Allot Activation Key
          </Typography>
          <FormControl fullWidth margin="normal">
            <Typography>Select Activation Key Group</Typography>
            <Select
              value={selectedGroup}
              onChange={handleAllotChange}
              displayEmpty
            >
              <MenuItem value="">-- Select Group --</MenuItem>
              {keyGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }} variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🛒 Purchase
          </Typography>

          <FormControl fullWidth margin="normal">
            <Typography>Select activation key group to purchase *</Typography>
            <Select
              value={purchaseGroup}
              onChange={handlePurchaseChange}
              displayEmpty
            >
              <MenuItem value="">-- Select Group --</MenuItem>
              {keyGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            type="number"
            fullWidth
            margin="normal"
            label="Quantity *"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handlePurchaseSubmit}
            sx={{ mt: 2 }}
          >
            ⭕ Purchase
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ActivationKey;
