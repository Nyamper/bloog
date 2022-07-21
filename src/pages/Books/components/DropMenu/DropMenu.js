import React, { useState } from 'react';
import DeleteModal from '../../../../components/DeleteModal';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DropMenu = ({ book, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
          <MenuItem
            onClick={() => {
              onEdit(book._id);
              setAnchorEl(null);
            }}
          >
            Edit
          </MenuItem>
          <MenuItem onClick={handlePopupClose}>
            <DeleteModal book={book} onDelete={onDelete} />
          </MenuItem>
        </Menu>
      </IconButton>
    </>
  );
};

export default DropMenu;
