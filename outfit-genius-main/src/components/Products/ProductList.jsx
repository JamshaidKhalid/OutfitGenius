import React from "react";
import {
  Grid,
  Box,
  Pagination,
  Stack
} from "@mui/material";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
function ProductList({ products }) {
  // getting params from url
  const [currentPage, setCurrentPage] = React.useState(1);
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const brand = params.get("brand").toLowerCase();
  const type = params.get("type").toLowerCase();
  const size = params.get("size").toLowerCase();
  const page = params.get("page");

  // filtering products based on params
  if (brand) {
    products = products.filter((p) => p.brand === brand);
  }
  if (type) {
    products = products.filter((p) => p.type === type);
  }
  if (size) {
    products = products.filter((p) => p.size === size);
  }
  // sorting products based on price
  products.sort((a, b) => a.price - b.price);

  // total number of pages for pagination 
  const totalPage = Math.ceil(products.length / 9);

  const handlePageChange = (event, value) => {
    console.log(value)
    setCurrentPage(value);
    
    navigate(`/product?brand=${brand}&type=${type}&size=${size}&page=${value}`);
  };

  // showing only 9 products per page
  if (page) {
    products = products.slice((page - 1) * 9, page * 9);
  } else {
    products = products.slice(0, 9);
  }
  
  return (
    <>
      {
        products.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            No Products Found
          </Box>
        ) : (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin:'2rem'
    
          }}>
            <Grid container spacing={3} justifyContent="center">
              {products.map((product) => (
                <Grid item xs={12} sm={7} md={6} lg={4} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )
      }
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'2rem'
      }}>
      <Stack spacing={2}>
        {/* making current page only active */}

        <Pagination count={totalPage} color="primary" onChange={handlePageChange} page={currentPage}/>
      </Stack>
      </Box>
    </>
  );
}

export default ProductList;
