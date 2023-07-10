import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchButton from '../common/SearchButton';
import Box from '@mui/material/Box';

export default function SearchDropDown({brands,types,sizes}) {
  const [value, setValue] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [type, setType] = React.useState('');
  const [size, setSize] = React.useState('');

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleSearch = () => {
    console.log(brand,type,size)
  }

  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        // on mobile devices the flex direction is column so add breakpoint
        '@media (max-width: 750px)': {
          flexDirection: 'column'
        }

      }}>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-helper-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={brand}
          label="Outfit"
          onChange={handleBrandChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            brands.map((item,index) => {
              return (
                <MenuItem key = {index} value={item}>{item}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={type}
          label="Type"
          onChange={handleTypeChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            types.map((item,index) => {
              return (
                <MenuItem key = {index} value={item}>{item}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={size}
          label="Size"
          onChange={handleSizeChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            sizes.map((item,index) => {
              return (
                <MenuItem key = {index} value={item}>{item}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>

      <SearchButton brand={brand} type={type} size={size}/>
      </Box>
    </div>
  );
}
