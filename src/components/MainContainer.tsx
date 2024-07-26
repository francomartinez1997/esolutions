import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header.tsx';
import CardsContainer from './CardsContainer.tsx';

interface CharacterI {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
}

export interface CardI {
  id: string;
  name: string;
  birthYear: string;
  gender: string;
  height: string;
}

const MainContainer: React.FC = () => {
  const [data, setData] = useState<CharacterI[]>([])
  const [availableCharacters, setAvailableCharacters] = useState<CharacterI[]>([]);
  const [cards, setCards] = useState<CardI[]>([]);
  const [error, setError] = useState<string | null>(null)

  const addCard = () => {
    if (availableCharacters.length === 0) {
      alert('No hay más personajes disponibles!');
      return;
    };

    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    const selectedCharacter = availableCharacters[randomIndex];

    const newCard = {
      id: uuidv4(),
      name: selectedCharacter.name,
      birthYear: selectedCharacter.birth_year,
      gender: selectedCharacter.gender,
      height: selectedCharacter.height
    };

    setCards([...cards, newCard]);
    setAvailableCharacters(availableCharacters.filter((_, index) => index !== randomIndex));
  };

  const deleteCard = (id: string) => {
    const cardToDelete: CardI | undefined = cards.find(card => card.id === id);
    if (cardToDelete) {
      const characterToAdd: CharacterI = {
        name: cardToDelete.name,
        birth_year: cardToDelete.birthYear,
        gender: cardToDelete.gender,
        height: cardToDelete.height
      };

      setCards(cards.filter(card => card.id !== id));
      setAvailableCharacters([...availableCharacters, characterToAdd]);
    }
  };

  const deleteAllCards = () => {
    setCards([]);
    setAvailableCharacters(data);
  };

  useEffect(() => {
    setAvailableCharacters(data);
  }, [data])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.py4e.com/api/people/');
        if (!response.ok) {
          alert('La response de la API no esta ok');
          return
        }
        const result = await response.json();
        setData(result.results)
      } catch (error) {
        setError((error as Error).message);
      }
    }
    fetchData();
  }, [])

  return (
    <Box display="flex" flexDirection="column" alignItems="center" >
      <Typography variant="h1" gutterBottom ><b>STAR WARS</b></Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        minWidth={500}
        minHeight="100px"
        sx={{ bgcolor: '#cdcdcd', borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}
      >
        <Header actions={[addCard, deleteAllCards]} />
        <CardsContainer cards={cards} deleteCard={deleteCard} />
      </Box>
    </Box>
  );
};

export default MainContainer;