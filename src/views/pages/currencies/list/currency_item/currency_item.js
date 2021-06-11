import React from 'react';
import { Edit, Delete } from '@material-ui/icons';
import {
  TableCell, TableRow, ButtonGroup, Button,
} from '@material-ui/core';

const CurrencyItem = ({ editHandler, deleteSubmitHandler, row }) => (
  <TableRow>
    <TableCell component='th' scope='row'>{row.id}</TableCell>
    <TableCell align='right'>{row.name}</TableCell>
    <TableCell align='right'>{row.rate}</TableCell>
    <TableCell align='right'>
    <ButtonGroup>
      <Button
        className='btn-edit' 
        onClick={() => editHandler(row)}
      >
        <Edit />
      </Button>
      <Button 
        className='btn-delete'
        onClick={deleteSubmitHandler}
      >
        <Delete />
      </Button>
    </ButtonGroup>
    </TableCell>
  </TableRow>
);

export default CurrencyItem;