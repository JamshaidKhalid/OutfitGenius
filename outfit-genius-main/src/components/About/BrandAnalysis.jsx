import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const brandData = [
  {
    brandName: 'Nike',
    rating: 4.5,
    reviews: 2300,
    priceRange: '$100-$200',
  },
  {
    brandName: 'Adidas',
    rating: 4.2,
    reviews: 1900,
    priceRange: '$80-$150',
  },
  {
    brandName: 'Puma',
    rating: 4.1,
    reviews: 1600,
    priceRange: '$90-$180',
  },
];

const BrandAnalysis = () => {
  return (
    <Box py={8} px={4} bgcolor="#f7f7f7">
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" component="h2" color="#1d1d1d" fontWeight="bold">
          Brand Analysis
        </Typography>
        <Typography variant="subtitle1" color="#777" mt={2}>
          Find the best brand for you
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {brandData.map((brand) => (
          <Grid item xs={12} sm={6} md={4} key={brand.brandName}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="#1d1d1d" fontWeight="bold" gutterBottom>
                  {brand.brandName}
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <Typography variant="h5" color="#F7C331" fontWeight="bold" mr={1}>
                    {brand.rating}
                  </Typography>
                  <Typography variant="subtitle1" color="#777" mr={1}>
                    ({brand.reviews} reviews)
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="#1d1d1d" mb={2}>
                  {brand.priceRange}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandAnalysis;
