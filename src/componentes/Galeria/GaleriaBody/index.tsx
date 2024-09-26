import Card from "./Card"
import { StyledGaleriaBody } from "./style"
import { NomeData } from "../../../assets/nomes"



const GaleriaBody = (  ) => {

    
    return (
        <StyledGaleriaBody>
            {NomeData.map( nome =>(
                <Card nome={nome} key={nome.id}/>
            ))}
          
        </StyledGaleriaBody>
    )
}

export default GaleriaBody