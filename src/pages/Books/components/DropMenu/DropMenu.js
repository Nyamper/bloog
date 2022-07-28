import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { types } from './constants';

const DropMenu = ({ book, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handlePopupClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopupClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    onDelete(book);
  };

  const handleEdit = () => {
    setAnchorEl(null);
    onEdit(book._id);
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
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </IconButton>
    </>
  );
};

export default DropMenu;

DropMenu.propTypes = types;
