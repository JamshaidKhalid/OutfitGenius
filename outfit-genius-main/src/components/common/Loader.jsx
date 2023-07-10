import { Backdrop, CircularProgress } from '@mui/material';
import { useState } from 'react';

const Loader = ({load}) => {
  const [loading, setLoading] = useState(load);

  const handleClose = () => {
    setLoading(false);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={handleClose}
      >
        <div sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <CircularProgress color="inherit" />
        </div>
      </Backdrop>
      {/* Add your content here */}
    </div>
  );
};

export default Loader;
