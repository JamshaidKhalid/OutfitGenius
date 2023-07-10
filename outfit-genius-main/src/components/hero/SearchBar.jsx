import { useState } from 'react';
import { IconButton, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  border: `1px solid gray`,
  borderRadius: '4px',
  padding: '4px',
  width: '100%',
  maxWidth: 400,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(1),
  flex: 1,

  '& .MuiInputBase-input': {
    fontSize: '1rem',
  },

  '& .MuiInputBase-root': {
    borderRadius: '4px',
    backgroundColor: theme.palette.common.white,
    paddingLeft: theme.spacing(2),
  },

  '& .MuiInputBase-root:hover': {
    backgroundColor: theme.palette.grey[100],
  },

  '& .MuiInputBase-root.Mui-focused': {
    backgroundColor: theme.palette.grey[100],
  },

  '& .MuiInputBase-root.Mui-focused:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchText);
    // Extracting brand type size from search text
    const brand = searchText.split(' ')[0];
    const type = searchText.split(' ')[1];
    const size = searchText.split(' ')[2];
    console.log('Brand:', brand);
    console.log('Type:', type);
    console.log('Size:', size);
    // Navigate to search results page
    navigate(`/product?brand=${brand?brand:""}&type=${type?type:""}&size=${size?size:""}`);

  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <SearchContainer>
      <IconButton type="submit" style={{ color: 'white' }}>
        <Search />
      </IconButton>
      <form onSubmit={handleSearch} style={{ width: '100%' }}>
        <StyledInputBase
          placeholder="Enter brand, type, and size"
          value={searchText}
          onChange={handleInputChange}
          fullWidth
        />
      </form>
    </SearchContainer>
  );
};

export default SearchBar;
