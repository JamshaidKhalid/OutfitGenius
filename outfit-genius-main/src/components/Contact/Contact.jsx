import { Box, Container, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactForm from './ContactForm';
import logo from '../../assets/logo.png';

const ContactContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px 0',
  minHeight: '100vh',
  backgroundColor: '#f9f9f9',
});

const ContactTitle = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  margin: '20px 0',
});

const ContactDescription = styled(Typography)({
  fontSize: '1.2rem',
  marginBottom: '30px',
  textAlign: 'center',
});

const ContactIcon = styled(IconButton)({
  backgroundColor: '#fff',
  marginRight: '10px',
  '&:hover': {
    backgroundColor: '#f9f9f9',
  },
});





const Contact = () => {

  return (
    <div>
      <ContactContainer>
        <Box sx={{ maxWidth: '700px', textAlign: 'center' }}>
          <img src={logo} alt="Outfit Genius" width="100" height="100" />
          <ContactTitle variant="h1">Contact Us</ContactTitle>
          <ContactDescription variant="subtitle1">
            Our mission is to help you find the best outfits that fit your style. If you have any questions or suggestions, we would love to hear from you.
          </ContactDescription>
          <Grid container justifyContent="center">
            <ContactIcon>
              <FacebookIcon fontSize="large" sx={{
                color: '#3b5998',

              }}/>
            </ContactIcon>
            <ContactIcon>
              <TwitterIcon fontSize="large" sx={{
                color: '#00acee',
              }}/>
            </ContactIcon>
            <ContactIcon>
              <LinkedInIcon fontSize="large" sx={{
                color: '#0e76a8',
              }}/>
            </ContactIcon>
          </Grid>
          <ContactDescription variant="subtitle1">
            You can also reach out to us by phone or email:
          </ContactDescription>
          <Grid container justifyContent="center">
            <ContactIcon>
              <PhoneIcon fontSize="large" sx={{
                color: '#333',

             }}/>
            </ContactIcon>
            <ContactDescription variant="subtitle1">(123) 456-7890</ContactDescription>
          </Grid>
          <Grid container justifyContent="center">
            <ContactIcon>
              <EmailIcon fontSize="large" sx={{
                color: '#333',
              }}/>
            </ContactIcon>
            <ContactDescription variant="subtitle1">support@outfitgenius.com</ContactDescription>
          </Grid>
          <Box sx={{
            fontSize: '1.2rem',
            textAlign: 'center',
            marginTop: '30px',
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}>Or you can directly Message us from here</Box>
        </Box>
      </ContactContainer>
      <ContactForm/>
</div>
  );
};

export default Contact;
