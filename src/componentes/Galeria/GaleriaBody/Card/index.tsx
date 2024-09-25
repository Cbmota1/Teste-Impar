import { ButtonEdit, ButtonTrash, CardBody, CardBottom, Column, Imagem, Slash, Text } from "./style"
import "../../../../index.css"

const Card = () => {
    return(
        <CardBody>
            <Imagem/>
            <Slash/>
            <Text style={{fontFamily : 'MuliLight'}}>Lorem ipsum dolor sit amet consectetur</Text>
            <CardBottom>
                <ButtonTrash style={{fontFamily: 'MuliLight'}}>Excluir</ButtonTrash>
                <Column/>
                <ButtonEdit style={{fontFamily: 'MuliLight'}}> Editar </ButtonEdit>
            </CardBottom>
        </CardBody>
    )
}

export default Card