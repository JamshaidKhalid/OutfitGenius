import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import logo from '../../assets/logo.png';
const Section3Container = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  backgroundColor: '#f8f8f8',
  height: '80vh',
  justifyCotent: 'center',
  '@media (max-width: 768px)': {
    flexDirection: 'row',
  },
});

const ImageContainer = styled(Box)({
  flex: '1 1 50%',
  textAlign: 'center',
  margin: '0 10px',
});

const Image = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const TextContainer = styled(Box)({
//   flex: '1 1 50%',
display:'flex',
flexWrap:'wrap',
  margin: '2rem 10rem',
  '@media (max-width: 768px)': {
    margin: '2rem',
  },
});

const Heading = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

const Description = styled(Typography)({
  fontSize: '1.2rem',
  lineHeight: 1.5,
  color: '#555',
});

const Section3 = () => {
  return (
    <Section3Container>
      <ImageContainer>
        <Image src={logo} alt="Outfit recommendation" />
      </ImageContainer>
      <TextContainer>
        <Heading variant="h2">Outfit AI Recommendation System</Heading>
        <Description variant="body1">
        An outfit AI recommendation system is a software application that uses machine learning algorithms to provide personalized recommendations for fashion items and outfits to users. These systems are designed to help users discover new fashion styles, make informed purchasing decisions, and improve their overall shopping experience.

The system typically works by analyzing user preferences, and other data points to generate personalized recommendations. Computer vision technology is used to analyze images of clothing items, identifying patterns, colors, and styles to suggest complementary items that would match a user's preferred style.

Outfit AI recommendation systems can be used by both online and brick-and-mortar retailers to help customers find items that they are more likely to purchase. They can also be integrated with virtual try-on technologies to help users visualize how outfits would look on them before making a purchase.
        </Description>
      </TextContainer>
    </Section3Container>
  );
};

export default Section3;
