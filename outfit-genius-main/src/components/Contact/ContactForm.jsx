import { styled } from '@mui/system';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  marginBottom:'3rem',
  paddingTop: '50px',
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '36px',
  marginBottom: '50px',
  color: '#333',
  textAlign: 'center',
});

const ContactForm = () => {
  return (
    <FormContainer>
      <Title>Contact Us</Title>
      <Box sx={{width: '100%'}}>
        <TextField
          required
          fullWidth
          margin='normal'
          label='Name'
          variant='outlined'
        />
      </Box>
      <Box sx={{width: '100%'}}>
        <TextField
          required
          fullWidth
          margin='normal'
          label='Email'
          variant='outlined'
        />
      </Box>
      <Box sx={{width: '100%'}}>
        <TextField
          required
          fullWidth
          margin='normal'
          label='Message'
          variant='outlined'
          multiline
          rows={6}
        />
      </Box>
      <Button
        variant='contained'
        color='primary'
        sx={{ marginTop: '20px' }}
      >
        Send Message
      </Button>
    </FormContainer>
  );
}

export default ContactForm;
