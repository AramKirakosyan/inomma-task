import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@material-ui/core';
import CurrencyItem from './currency_item';

const CurrenciesList = ({currencies, editHandler, deleteHandler}) => (
  <TableContainer component={Paper}>
    <Table size='small' aria-label='a dense table'>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align='right'>Currency Name</TableCell>
          <TableCell align='right'>Rate (1$ = X rate)</TableCell>
          <TableCell align='right'></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currencies.map((row) => (
          <CurrencyItem
            key={row.id}
            editHandler={editHandler}
            deleteSubmitHandler={() => deleteHandler(row.uniqueKey)}
            row={row}
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
  
export default CurrenciesList;
