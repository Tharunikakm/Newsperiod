import React from 'react';
import { Fab } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const FloatingHelplineButton = ({ onClick }) => {
  return (
    <Fab
      aria-label="helpline"
      onClick={onClick}
      sx={{
        position: 'fixed',
        bottom:100, 
        right: 16,
        backgroundColor: '#413110;', 
        '&:hover': {
          backgroundColor: '#fdfdfd', 
        },
      }}
    >
      <HelpIcon />
    </Fab>
  );
};

export default FloatingHelplineButton;
