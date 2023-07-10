import React from 'react';
import { styled } from '@mui/system';
import { Container, Grid, Link, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled('footer')({
  backgroundColor: 'white',
  padding: '64px 0',
  marginTop: '8rem',
});

const IconContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    fontSize: '48px',
    margin: '0 8px',
  },
});

const PhoneNumber = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    fontSize: '24px',
    marginRight: '8px',
  },
});

function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">Outfit Genius</Typography>
            <Typography variant="body1">
              Your Personalized Style Assistant
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Social Media</Typography>
            <IconContainer>
              <Link href="https://www.facebook.com/">
                <FacebookIcon />
              </Link>
              <Link href="https://www.instagram.com/">
                <InstagramIcon />
              </Link>
              <Link href="https://twitter.com/">
                <TwitterIcon />
              </Link>
            </IconContainer>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact Us</Typography>
            <PhoneNumber variant="subtitle1">
              <PhoneIcon />
              +1 (123) 456-7890
            </PhoneNumber>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
