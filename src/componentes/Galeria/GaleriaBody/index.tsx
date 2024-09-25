import { getData } from "../../API"
import Card from "./Card"
import { StyledGaleriaBody } from "./style"
import { useEffect, useState } from "react"

const GaleriaBody = () => {

    const [name, setName] = useState([]);

    useEffect(() => {
        getData().then((data) => {
            setName(data)
        });

    }, [])
    
    return (
        <StyledGaleriaBody>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </StyledGaleriaBody>
    )
}

export default GaleriaBody