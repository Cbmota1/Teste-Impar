import Card from './Card';
import { StyledGaleriaBody } from './style';

import { useListaDePersonagens } from '../../ListaPersonagens';

const GaleriaBody = () => {
  const personagens = useListaDePersonagens();

  return (
    <StyledGaleriaBody>
      {personagens.map((personagem, index) => (
        <Card nome={personagem.name} altura={personagem.height} key={index} />
      ))}
    </StyledGaleriaBody>
  );
};

export default GaleriaBody;
