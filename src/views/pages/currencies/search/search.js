import React from 'react';
import { TextField, Box } from '@material-ui/core';

const Search = ({ setSearchBy }) => (
  <Box display='flex' justifyContent='flex-end' margin='20px 0'>
    <TextField 
      id='outlined-basic'
      variant='outlined'
      type='search'
      placeholder='Search currency by currency name'
      onChange={(e) => setSearchBy(e.target.value.trim())}
    />
  </Box>
);

export default Search;
