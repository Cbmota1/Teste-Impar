import { ButtonEdit, ButtonTrash, CardBody, CardBottom, Column, Imagem, Slash, Text } from "./style"
import "../../../../index.css"
import { Nomes } from "../../../../assets/nomes"

interface CardProps{
    nome: Nomes   
}

const Card = ( {nome}: CardProps ) => {
    return(
        <CardBody>
            <Imagem/>
            <Slash/>
            <Text style={{fontFamily: 'MuliLight'}} >{nome.titulo}</Text>
            <CardBottom>
                <ButtonTrash style={{fontFamily: 'MuliLight'}}>Excluir</ButtonTrash>
                <Column/>
                <ButtonEdit style={{fontFamily: 'MuliLight'}}> Editar </ButtonEdit>
            </CardBottom>
        </CardBody>
    )
}

export default Card