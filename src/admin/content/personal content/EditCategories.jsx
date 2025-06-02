import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

const examCategories = [
  'Edit Level 0',
  'Edit Level 1',
  'Edit Level 2',
  'Edit Level 3',
  'Edit Level 4',
  'Edit Level 5',
];

export default function EditCategories() {
  const [selected, setSelected] = useState([]);
  const allSelected = selected.length === examCategories.length;

  const toggleCategory = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleActivateAll = (checked) => {
    if (checked) {
      setSelected([...examCategories]);
    } else {
      setSelected([]);
    }
  };

  const handleSubmit = () => {
    alert(`Submitting: ${selected.join(', ')}`);
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        backgroundColor: '#e4e4e4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 4,
        px: 2,
      }}
    >
      <Card
        sx={{
          width: { xs: '100%', sm: 400 },
          maxWidth: 400,
          borderRadius: 2,
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        <CardHeader
          avatar={<StarBorderIcon />}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Edit Category"
          sx={{
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid #ddd',
            px: 2,
            py: 1,
            fontWeight: 600,
          }}
        />

        <Box
          sx={{
            maxHeight: 380,
            overflowY: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {examCategories.map((exam) => {
            const isSelected = selected.includes(exam);
            return (
              <Button
                key={exam}
                fullWidth
                variant={isSelected ? 'contained' : 'outlined'}
                onClick={() => toggleCategory(exam)}
                sx={{
                  borderColor: '#00bfff',
                  color: isSelected ? 'white' : '#333',
                  backgroundColor: isSelected ? '#00bfff' : 'transparent',
                  '&:hover': {
                    backgroundColor: isSelected ? '#00a5d6' : '#e0f7ff',
                  },
                }}
              >
                {exam}
              </Button>
            );
          })}
        </Box>

        <Divider />
      </Card>

      <Box sx={{ mt: 3, width: { xs: '100%', sm: 'auto' }, maxWidth: 400 }}>
        <Button
          variant="contained"
          disabled={selected.length === 0}
          onClick={handleSubmit}
          sx={{
            px: 4,
            borderRadius: 999,
            backgroundColor: '#28a745',
            '&:hover': {
              backgroundColor: '#218838',
            },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
}
