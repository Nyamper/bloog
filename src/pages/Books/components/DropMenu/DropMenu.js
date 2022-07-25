import { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DropMenu = ({ book, onEdit, onDelete }) => {
  DropMenu.propTypes = {
    book: PropTypes.object,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
  };
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
