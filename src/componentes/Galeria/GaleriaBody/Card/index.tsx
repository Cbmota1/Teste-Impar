import { ButtonEdit, ButtonTrash, CardBody, CardBottom, Column, Imagem, Slash, Text } from "./style"
import "../../../../index.css"

import React from "react"

interface CardProps{
    nome:string  
    altura:string
}

const Card: React.FC<CardProps> = ({nome , altura})=> {
    return(
        <CardBody>
            <Imagem/>
            <Slash/>
            <Text style={{fontFamily: 'MuliLight'}} >{nome}</Text>
            <Text style={{fontFamily: 'MuliLight'}} >{altura} cm</Text>

            <CardBottom>
                <ButtonTrash style={{fontFamily: 'MuliLight'}} onClick={() => alert('Função não implementada.')} >Excluir</ButtonTrash>
                <Column/>
                <ButtonEdit style={{fontFamily: 'MuliLight'}} onClick={() => alert('Função não implementada.')}> Editar </ButtonEdit>
            </CardBottom>
        </CardBody>
    )
}

export default Card