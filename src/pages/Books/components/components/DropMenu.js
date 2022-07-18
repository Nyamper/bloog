import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  showCreateEditModal,
  setTitle,
  getBookId,
  editModal,
} from '../../../../components/CreateEditBookForm/reducers/createEditModalSlice';
import DeleteModal from '../../../../components/DeleteModal';

import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DropMenu = ({ bookId, title }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleEdit = () => {
    dispatch(editModal());
    dispatch(getBookId(bookId));
    dispatch(setTitle(`Edit ${title}`));
    dispatch(showCreateEditModal());
    setAnchorEl(null);
  };

  const handlePopupClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopupClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-label="settings">
        <MoreVertIcon
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handlePopupClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handlePopupClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem onClick={handlePopupClose}>
            <DeleteModal bookId={bookId} title={title} />
          </MenuItem>
        </Menu>
      </IconButton>
    </>
  );
};

export default DropMenu;
