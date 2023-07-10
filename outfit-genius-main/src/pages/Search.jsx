import AllDropDowns from "../components/search/AllDropDowns";
import { Box } from "@mui/material";
import BgVideo from "../assets/bgVideo.mp4";
const Search = () => {
  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
      }}>
        <video autoPlay loop muted src={BgVideo} style={{
          width: '50%',
          height: '30%',
          objectFit: 'cover',
        }}/>
      

      </Box>
      <AllDropDowns/>
    </div>
  )
}

export default Search
