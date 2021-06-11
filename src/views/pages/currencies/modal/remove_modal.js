import React from 'react';
import { Button, ButtonGroup, Modal, Typography } from '@material-ui/core';
import '../../../../components/shared/modal/modal.scss'

const RemoveModal = ({ id, modalClose, deleteSubmitHandler }) => {

  return (
    <Modal
      open={id !== ''}
      onClose={modalClose}
      className='modal-section'
    >
      <div className='modal-inner'>
        <Typography variant='h5'>Remove Currency</Typography>
        <div className='desc'>
          <Typography variant='caption'>Are you sure you want to remove this Currency</Typography>
        </div>
          <ButtonGroup className='buttons-group'>
            <Button 
                className='btn-cancel'
                onClick={modalClose}
              >
              Cancel
            </Button>
            <Button
              className='btn-confirm'
              variant='contained'
              color='primary'
              onClick={deleteSubmitHandler}
            >
              Confirm
            </Button>
          </ButtonGroup>
        </div>
    </Modal>
  );
};

export default RemoveModal;
