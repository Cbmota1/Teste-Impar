import styled from "styled-components";
import fundoBusca from '../../assets/images/fundo-busca@2x.png'


export const StyledBanner = styled.figure`
margin-top: 0px;
margin-left: 0px;
height: 261px;
width: 100%;
background-image: url(${fundoBusca}) ;
background-repeat: no-repeat;
background-position: center;
opacity: 1;
`
export const StyledDiv = styled.div`
top: 180px;
left: 23%;
width: 55%;
height: 75px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 8px;
opacity: 1;
position: absolute;
`
export const StyledInput = styled.input`
height: 75px;
width: 90%;
margin-left: 20px;
padding: 12px 16px;
background: transparent;
border: none;
letter-spacing: 0px;
color: #757575;
font-weight: 400;
font-size: 24px;
line-height: 30px;
outline: none;

`
export const IconeLupa = styled.img`
position: absolute;
margin-top: 10px;
left: 90%;
width: 49px;
height: 49px;
`;


