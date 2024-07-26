import React from 'react';
import { Box } from '@mui/material';
import CustomButton from './CustomButton.tsx';

const Header: React.FC<{ actions: (() => void)[] }> = ({ actions }) => {
  const [ addCard, deleteAllCards ] = actions;

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="3.5em"
    marginBottom={3}
    gap={3}
    sx={{ bgcolor: "white" }}
  >
    <CustomButton label="Agregar Personaje" color="primary" onClick={addCard} />
    <CustomButton label="Borrar Todos" color="error" onClick={deleteAllCards} />
  </Box>
  );
};

export default Header;