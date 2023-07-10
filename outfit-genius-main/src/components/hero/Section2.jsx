import React from 'react'
import ProductComparison from '../About/ProductComparison'
import Typography from '@mui/joy/Typography/Typography';
import {styled} from '@mui/system';
import Box from '@mui/material/Box';
const Section2 = () => {
  const Description = styled(Typography)({
    fontSize: '1.2rem',
    color: '#55555'
  });
  return (
    <div style={{
      backgroundColor: '#F5F5F5',
    }}>
      <ProductComparison/>
      
    </div>
  )
}

export default Section2
