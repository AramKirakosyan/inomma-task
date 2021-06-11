import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';

const Header = ({ addCurrencyHandler }) => (
  <header>
    <Box display='flex' justifyContent='space-between'>
      <Typography variant='h3'>Custom Currencies</Typography>
      <Button variant='contained' color='primary' onClick={addCurrencyHandler}>
        Add Currency
      </Button>
    </Box>
  </header>
);

export default Header;
