import React from 'react';
import { styled } from '@mui/system';
import {Typography,Box} from '@mui/material';
import Clothing from "../../assets/clothing.png"

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '32px',
  backgroundColor: '#f8f8f8',
  flexWrap: 'wrap',
  height: '100vh',
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '48px',
  color: '#1d1d1d',
  marginBottom: '8px',
});

const Description = styled(Typography)({
  fontSize: '1.1rem',
  color: '#777',
});

const Image = styled('img')({
  height: 'auto',
  maxWidth: '100%',
  "@media (max-width: 600px)": {
    width:"60%",
  }
});

function Section1() {
  return (
    <Container>
      <div style={{
       display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
      }}>
        <Title variant="h1">Outfit Genius</Title>
        <Description variant="body1">
        Outfit Genius is a cutting-edge personal styling platform that empowers individuals to create unique and stylish outfits. Our platform leverages the latest AI technology to provide personalized outfit recommendations based on your individual style preferences, body type, and occasion. Whether you're looking for an outfit for a special occasion or just want to refresh your wardrobe, Outfit Genius has got you covered. Our mission is to help people feel confident and empowered through their personal style, and we're committed to making it easy and accessible for everyone
        </Description>
      </div>

      <Image src={Clothing} alt="Aesthetic Image" />
    </Container>
  );
}

export default Section1;
