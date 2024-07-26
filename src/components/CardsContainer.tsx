import React from 'react';
import { Box } from '@mui/material';
import CustomCard from './Card.tsx';
import { CardI } from './MainContainer.tsx';

const CardsContainer: React.FC<{ cards: CardI[], deleteCard: (id: string) => void }> = ({ cards, deleteCard }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gridAutoRows="auto"
      gap={2}
      width="100%"
      padding="0em 2em 1em 2em"
    >
      {cards.map(card => (
        <CustomCard
          key={card.id}
          name={card.name}
          birthYear={card.birthYear}
          gender={card.gender}
          height={card.height}
          onButtonClick={() => deleteCard(card.id)}
        />
      ))}
    </Box>
  );
};

export default CardsContainer;