import React from 'react';
import { Button, ButtonGroup, Grid, Modal, TextField, Typography } from '@material-ui/core';
import ModalModes from '../../../../constants/modal_modes';
import '../../../../components/shared/modal/modal.scss'

const AddEditModal = ({ mode, modalClose, submitChanges, editModel }) => {

  return (
      <Modal
        open={mode !== ModalModes.none}
        onClose={modalClose}
        className='modal-section'
      >
        <div className='modal-inner'>
          <Typography variant='h5'>{`${mode} Currency`}</Typography>
          <form
            onSubmit={submitChanges}
            className='form'
          >
            <Grid item xs={12}>
              <label htmlFor='currency-name'>Name</label>
              <TextField
                id='currency-name'
                name='name'
                variant='outlined'
                placeholder='Enter name'
                defaultValue={mode === ModalModes.edit ? editModel.name : ''}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor='currency-rate'>Rate</label>
              <TextField
                id='currency-rate'
                name='rate'
                type='number'
                variant='outlined'
                placeholder='Enter rate'
                defaultValue={mode === ModalModes.edit ? editModel.rate : ''}
                required
              />
              <Typography 
                variant='caption'
                className='txt-advice'
              >
                Enter only number
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup className='buttons-group'>
                <Button
                  className='btn-cancel'
                  onClick={modalClose}
                >
                  Cancel
                </Button>
                <Button
                  className='btn-confirm'
                  color='primary'
                  type='submit'
                >
                  Confirm
                </Button>
              </ButtonGroup>
            </Grid>            
          </form>
        </div>
      </Modal>
  );
};

export default AddEditModal;
