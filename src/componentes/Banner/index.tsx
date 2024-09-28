import { IconeLupa, StyledBanner, StyledDiv, StyledInput } from './style';
import lupa from '../../assets/images/lupa@2x.png';
import '../../index.css';

const Banner = () => {
  return (
    <StyledBanner>
      <StyledDiv>
        <StyledInput
          placeholder="Digite aqui a sua busca..."
          style={{ fontFamily: 'MuliLight' }}
        />
        <IconeLupa src={lupa} alt="iconeLupa" />
      </StyledDiv>
    </StyledBanner>
  );
};

export default Banner;
