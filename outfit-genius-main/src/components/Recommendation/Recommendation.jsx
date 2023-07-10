import React from 'react'
import ImageUpload from './ImageUpload'
import { Typography ,Box, Button} from '@mui/material'

const Recommendation = () => {
  return (
    <Box> 
      <Typography sx={{
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        padding: ".5rem 2rem",
        color: "#3f51b5",
      }}>
        Recommendation
      </Typography>
      <Typography sx={{ 
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
        padding: ".5rem",
        color:"GrayText"

      }}>Upload an image of your outfit</Typography>
      <Typography sx={{
        fontSize: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        padding: ".5rem",
        color: "GrayText"

      }}>
Our AI will recommend you a better outfit
      </Typography>
      <ImageUpload/>
      
    </Box>
  )
}

export default Recommendation
