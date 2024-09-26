import { useState, useEffect } from 'react';
import axios from 'axios';


 export interface Personagem {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld:string;
  films:string;
  species:string;
  vehicles:string;
  starships:string;
  created:string;
  edited:string;
  url:string;
  
}

export const useListaDePersonagens = (): Personagem[] => {
  const [personagens, setPersonagens] = useState<Personagem[]>([]);

  useEffect(() => {
    
    const fetchPersonagens = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setPersonagens(response.data.results); 
      } catch (error) {
        console.error("Erro ao buscar os personagens", error);
      }
    };

    fetchPersonagens(); 
    
  }, []); 

  return personagens; 
};