import SearchDropDown from './SearchDropDown'
import {Box} from '@mui/material'
import dummyData from '../../data/dummyData'
import productData from '../../data/ProductData';
import SearchButton from '../common/SearchButton';


export default function  AllDropDowns (){
  const {label, options} = dummyData;
  const uniqueTypes = [... new Set(productData.map((p) => p.type))];
  const uniqueBrands = [... new Set(productData.map((p) => p.brand))];
  const uniqueSizes = [... new Set(productData.map((p) => p.size))];
  

  return (
    <div>
      <Box>
            <SearchDropDown  brands={uniqueBrands} types={uniqueTypes} sizes={uniqueSizes}/>
      </Box>
      
    </div>
  )
}

