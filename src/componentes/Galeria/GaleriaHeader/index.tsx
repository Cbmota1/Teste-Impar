import { GaleriaHeaderButton, GaleriaHeaderDiv, GaleriaHeaderTitle } from "./styles"
import "../../../index.css"

const GaleriaHeader = () => {
    return (
        <GaleriaHeaderDiv>
            <GaleriaHeaderTitle style={{fontFamily :'MuliRegular'}}>Resultado de busca</GaleriaHeaderTitle>
            <GaleriaHeaderButton style={{fontFamily: 'MuliBold'}}>Novo Card</GaleriaHeaderButton>
        </GaleriaHeaderDiv>
    )
}

export default GaleriaHeader