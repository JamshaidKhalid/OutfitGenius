import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchButton = ({brand,type,size}) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    console.log(brand,type,size)
    // redirecting to search page with params in url
    navigate(`/product?brand=${brand}&type=${type}&size=${size}`);
  }
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "brown",
          color: "white",
          marginLeft: "1rem",
          width: "10rem",
          "&:hover": {
            backgroundColor: "#032c2a",
            color: "white",
          },
        }}
        endIcon={<SearchIcon />}
        onClick={() => handleSearch()}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchButton;
