import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Personagem {
  name: string;
  height: string;
}

export const useListaDePersonagens = (): Personagem[] => {
  const [personagens, setPersonagens] = useState<Personagem[]>([]);

  useEffect(() => {
    const fetchPersonagens = async () => {
      try {
        const responsePage1 = await axios.get('https://swapi.dev/api/people/');
        const personagensPage1 = responsePage1.data.results;

        const responsePage2 = await axios.get(responsePage1.data.next);
        const personagensPage2 = responsePage2.data.results;

        const allPersonagens = [...personagensPage1, ...personagensPage2];

        setPersonagens(allPersonagens);
      } catch (error) {
        console.error('Erro ao buscar os personagens', error);
      }
    };

    fetchPersonagens();
  }, []);

  return personagens;
};
