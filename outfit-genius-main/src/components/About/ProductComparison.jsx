import { Box, Container, Typography,Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const ProductComparisonSection = styled('section')({
  backgroundColor: '#F5F5F5',
  padding: '80px 0',

});

const SectionTitle = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '40px',
  textAlign: 'center',
});

const ComparisonContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  // on smaller devices, make the cards stack
  '@media (max-width: 724px)': {
    flexDirection: 'column',
  },
});

const ComparisonCard = styled(Box)({
  width: '20rem',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  padding: '30px',
  marginBottom: '40px',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 8px 40px rgba(0, 0, 0, 0.2)',
  },
  // on smaller devices, make the cards stack
  '@media (max-width: 724px)': {
    width:'80%'
  },
});

const ComparisonTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 700,
  marginBottom: '20px',
});

const ComparisonText = styled(Typography)({
  fontSize: '1rem',
  color: '#555555',
  marginBottom: '30px',
});

const ComparisonButton = styled(Button)({
  backgroundColor: '#FF6B6B',
  color: '#FFFFFF',
  borderRadius: '5px',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: '#E25F5F',
  },
});

function ProductComparison() {
  const navigate = useNavigate();
  return (
    <ProductComparisonSection>
      <SectionTitle variant="h2">Product Comparison</SectionTitle>
      <ComparisonContainer maxWidth="lg">
        <ComparisonCard>
          <ComparisonTitle variant="h3">Shirts</ComparisonTitle>
          <ComparisonText>
            Shirts from different brands and stores are compared based on their price, quality, and style.
          </ComparisonText>
          <ComparisonButton variant="contained">View Details</ComparisonButton>
        </ComparisonCard>
        <ComparisonCard>
          <ComparisonTitle variant="h3">Pants</ComparisonTitle>
          <ComparisonText>
            Pants from different brands and stores are compared based on their price, quality, and style.
          </ComparisonText>
          <ComparisonButton variant="contained">View Details</ComparisonButton>
        </ComparisonCard>
        <ComparisonCard>
          <ComparisonTitle variant="h3">Shorts</ComparisonTitle>
          <ComparisonText>
            Shorts from different brands and stores are compared based on their price, quality, and style.
          </ComparisonText>
          <ComparisonButton variant="contained" onClick={()=>navigate('/search')}>View Details</ComparisonButton>
        </ComparisonCard>
      </ComparisonContainer>
    </ProductComparisonSection>
  );
}

export default ProductComparison;
