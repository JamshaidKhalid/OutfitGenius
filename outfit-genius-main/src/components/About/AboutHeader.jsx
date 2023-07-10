import React from 'react';
import { Box, Typography } from '@mui/material';
import {styled} from '@mui/system';
import OutfitGeniusLogo from '../../assets/logo.png';
import {createTheme} from '@mui/material/styles';
const theme = createTheme();
const OutfitGeniusHeading = styled(Typography)`
  font-size: 32px;
  font-weight: bold;
  margin-left: 20px;
`;

export default function AboutPageHeader () {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '2rem',
      backgroundColor: '#F5F5F5',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    }}>
      <Box display="flex" alignItems="center">
        <img src={OutfitGeniusLogo} alt="Outfit Genius Logo" height="200" />
        </Box>
        <OutfitGeniusHeading variant="h1">Outfit Genius</OutfitGeniusHeading>
      
    </Box>
  );
};

