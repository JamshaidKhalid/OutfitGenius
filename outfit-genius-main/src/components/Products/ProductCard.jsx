import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function ProductCard({product}) {
  return (
    <Card variant="outlined" sx={{minWidth:240, maxWidth:330}}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {product.name}
      </Typography>
      <Typography level="h3" fontSize="md" sx={{ mb: 0.5 }}>
        {product.size}
      </Typography>
      <Typography level="body2">{product.brand.toUpperCase()}</Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
  <FavoriteBorder />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={product.image}
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${product.price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
          onClick={() => window.open(product.link)}
        >
          Explore
        </Button>
      </Box>
    </Card>
  );
}
