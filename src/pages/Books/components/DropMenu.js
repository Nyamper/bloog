import React, { useState } from 'react';

import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import EditBookModal from '../../../components/EditBookModal/';
import DeleteModal from '../../../components/DeleteModal';

const DropMenu = ({ bookId, title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showUpdateModal = () => {
    setAnchorEl(null);
    setShowEditModal(true);
  };

  const showDeleteModal = () => {
    setAnchorEl(null);
    setDeleteModal(true);
  };

  return (
    <>
      {deleteModal && <DeleteModal bookId={bookId} title={title} />}
      {showEditModal && <EditBookModal />}
      <IconButton aria-label="settings">
        <MoreVertIcon
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={showUpdateModal}>Update</MenuItem>
          <MenuItem onClick={showDeleteModal}>Delete</MenuItem>
        </Menu>
      </IconButton>
    </>
  );
};

export default DropMenu;
