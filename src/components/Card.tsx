import React from 'react';
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import CustomButton from './CustomButton.tsx';

interface CardProps {
  name: string;
  birthYear: string;
  gender: string;
  height: string;
  onButtonClick: () => void;
}

const CustomCard: React.FC<CardProps> = ({ name, birthYear, gender, height, onButtonClick }) => {
  return (
    <Card 
      elevation={3} 
      sx={{
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }
      }}
    >
      <CardContent>
        <Typography variant="h5">
          {name}
        </Typography>
        <hr />
        <Typography variant="body1" >
          <b>Fecha de nacimiento:</b> {birthYear}
        </Typography>
        <Typography variant="body1" >
          <b>Genero:</b> {gender}
        </Typography>
        <Typography variant="body1" >
          <b>Altura:</b> {height}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: 'center' }}>
        <CustomButton label='Borrar Personaje' color="error" onClick={onButtonClick} />
      </CardActions>
    </Card>
  );
};

export default CustomCard;
