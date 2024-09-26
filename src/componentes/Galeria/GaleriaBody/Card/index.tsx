import { ButtonEdit, ButtonTrash, CardBody, CardBottom, Column, Imagem, Slash, Text } from "./style"
import "../../../../index.css"

import React from "react"

interface CardProps{
    nome:string  
}

const Card: React.FC<CardProps> = ({nome})=> {
    return(
        <CardBody>
            <Imagem/>
            <Slash/>
            <Text style={{fontFamily: 'MuliLight'}} >{nome}</Text>
            <CardBottom>
                <ButtonTrash style={{fontFamily: 'MuliLight'}}>Excluir</ButtonTrash>
                <Column/>
                <ButtonEdit style={{fontFamily: 'MuliLight'}}> Editar </ButtonEdit>
            </CardBottom>
        </CardBody>
    )
}

export default Card