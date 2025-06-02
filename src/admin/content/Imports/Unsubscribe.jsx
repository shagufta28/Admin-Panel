import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Typography,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

// Mock Data
const mockHierarchy = {
  0: ['Engineering Entrance', 'Banking', 'Medical', 'School exam all india', 'School Level - board', 'Professional Courses', 'Others'],
  1: {
    'Engineering Entrance': ['Engineering All India', 'State Engineering Exams', 'Industrial Training Institute (ITI)', 'Polytechnic'],
    Banking: ['Banking Exams'],
    Medical: ['Medical Entrance'],
    'School exam all india': ['School Level - All India'],
    'School Level - board': ['School Level - Board'],
    'Professional Courses': ['Professional Courses'],
    Others: ['Others'],
    'Industrial Training Institute (ITI)': ['ITI Exams'],
    'Polytechnic': ['Polytechnic Exams'],
  },
  2: {
    'Engineering All India': ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'SRMJEEE', 'KIITEE', 'UPES Engineering Entrance Test'],
    'Banking Exams': ['IBPS PO', 'IBPS Clerk', 'SBI PO', 'SBI Clerk', 'RBI Assistant', 'RBI Grade B'],
    'Medical Entrance': ['NEET UG', 'AIIMS MBBS', 'JIPMER MBBS', 'AFMC MBBS', 'PGIMER', 'AIIMS PG'],
    'School Level - All India': ['JEE Main', 'NEET UG', 'CUET'],
    'School Level - Board': ['CBSE', 'ICSE', 'State Boards'],
    'Professional Courses': ['CA', 'CS', 'CMA', 'CFA', 'CIMA'],
    'ITI Exams': ['NCVT ITI', 'SCVT ITI'],
    'Polytechnic Exams': ['UP Polytechnic', 'Maharashtra Polytechnic', 'Tamil Nadu Polytechnic', 'Delhi Polytechnic', 'Punjab Polytechnic'],
    'JEE Main': ['Mock Tests'],
    'JEE Advanced': ['Mock Tests'],
    'State Engineering Exams': ['Assam CEE', 'MHT CET', 'AP EAMCET Engineering', 'MP PPT', 'PESSAT', 'UPSEE', 'WBJEE', 'COMEDK', 'SLIET'],
  },
  3: {
    'Assam CEE': ['Mock Tests'],
    'MHT CET': ['Mock Tests'],
    'AP EAMCET Engineering': ['Mock Tests'],
    'MP PPT': ['Mock Tests'],
    'PESSAT': ['Mock Tests'],
    'UPSEE': ['Mock Tests'],
    'WBJEE': ['Mock Tests'],
    'COMEDK': ['Mock Tests'],
    'SLIET': ['Mock Tests'],
    'JEE Main Mock Tests': [
      'JEE Main Mock Test - 1',
      'JEE Main Mock Test - 2',
      'JEE Main Mock Test - 3',
      'JEE Main Mock Test - 4',
      'JEE Main Mock Test - 5',
      'JEE Main Mock Test - 6',
      'JEE Main Mock Test - 10',
    ],
    'JEE Advanced Mock Tests': [
      'JEE Advanced Mock Test - 1',
      'JEE Advanced Mock Test - 2',
      'JEE Advanced Mock Test - 3',
      'JEE Advanced Mock Test - 4',
      'JEE Advanced Mock Test - 5',
      'JEE Advanced Mock Test - 6',
      'JEE Advanced Mock Test - 10',
    ],
  },
  4: {
    
    'Mock Tests': [
      'Assam CEE Mock Test - 1',
      'Assam CEE Mock Test - 2',
      'Assam CEE Mock Test - 3',
      'Assam CEE Mock Test - 4',
      'Assam CEE Mock Test - 5',
      'Assam CEE Mock Test - 6',
      'Assam CEE Mock Test - 10',
    ],
    'JEE Main Mock Test - 1': ['JEE Main Mock Test - 1A', 'JEE Main Mock Test - 1B'],
    'JEE Main Mock Test - 2': ['JEE Main Mock Test - 2A', 'JEE Main Mock Test - 2B'],
    'JEE Main Mock Test - 3': ['JEE Main Mock Test - 3A', 'JEE Main Mock Test - 3B'],
    'JEE Main Mock Test - 4': ['JEE Main Mock Test - 4A', 'JEE Main Mock Test - 4B'],
    'JEE Main Mock Test - 5': ['JEE Main Mock Test - 5A', 'JEE Main Mock Test - 5B'],
    'JEE Main Mock Test - 6': ['JEE Main Mock Test - 6A', 'JEE Main Mock Test - 6B'],
    'JEE Main Mock Test - 10': ['JEE Main Mock Test - 10A', 'JEE Main Mock Test - 10B'],
    'JEE Advanced Mock Test - 1': ['JEE Advanced Mock Test - 1A', 'JEE Advanced Mock Test - 1B'],
    'JEE Advanced Mock Test - 2': ['JEE Advanced Mock Test - 2A', 'JEE Advanced Mock Test - 2B'],
    'JEE Advanced Mock Test - 3': ['JEE Advanced Mock Test - 3A', 'JEE Advanced Mock Test - 3B'],
    
  },
};

function LevelBox({ level, options, selected, onSelect }) {
  return (
    <Card sx={{ minWidth: 250, maxHeight: 400, overflowY: 'auto', p: 2 }}>
      <Typography fontWeight="bold" mb={1}>
        LEVEL {level}
      </Typography>
      <Stack spacing={1}>
        {options.map((option) => {
          const isSelected = selected === option;
          return (
            <Button
              key={option}
              variant={isSelected ? 'contained' : 'outlined'}
              onClick={() => onSelect(option)}
              endIcon={
                isSelected && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect(null);
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )
              }
              sx={{
                justifyContent: 'space-between',
                backgroundColor: isSelected ? '#00bfff' : 'white',
                color: isSelected ? 'white' : 'inherit',
              }}
            >
              {option}
            </Button>
          );
        })}
      </Stack>
    </Card>
  );
}

export default function UnsubscribeFlow() {
  const [selections, setSelections] = useState({ 0: null, 1: null, 2: null, 3: null, 4: null });

  const handleSelect = (level, value) => {
    setSelections((prev) => {
      const newSel = { ...prev, [level]: value };
      // Clear deeper selections
      for (let i = level + 1; i <= 4; i++) newSel[i] = null;
      return newSel;
    });
  };

  const renderLevels = () => {
    const levels = [];

    // Always render Level 0
    levels.push(
      <LevelBox
        key={0}
        level={0}
        options={mockHierarchy[0]}
        selected={selections[0]}
        onSelect={(val) => handleSelect(0, val)}
      />
    );

    for (let i = 1; i <= 4; i++) {
      const parent = selections[i - 1];
      if (parent && mockHierarchy[i]?.[parent]) {
        levels.push(
          <LevelBox
            key={i}
            level={i}
            options={mockHierarchy[i][parent]}
            selected={selections[i]}
            onSelect={(val) => handleSelect(i, val)}
          />
        );
      }
    }

    return levels;
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 4 }}>
      {renderLevels()}
    </Box>
  );
}
