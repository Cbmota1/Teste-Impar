import styled from "styled-components";
import icone from "../../../../assets/images/icone.png"
import iconeTrash from "../../../../assets/images/Icon-trash.png"
import iconeEdit from "../../../../assets/images/Icon-edit.png"

export const CardBody = styled.div`
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #E5E5E5;
border: 1px solid #E4E4E4;
border-radius: 8px;
opacity: 1;
width: 234px;
height: 267px;
position: relative;
`

export const CardBottom = styled.footer`
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: inset 0px 3px 6px #0000000F;
border-radius: 0px 0px 8px 8px;
opacity: 1;
height: 43px;
width: 100%;
position: absolute;
bottom: 0;
display: flex;
flex-direction: row;
`

export const Imagem = styled.figure`
background-image: url(${icone});
background-repeat: no-repeat;
background-color: #F6F4F6;
background-position: center;
border-color: #E4E4E4;
width: 95px;
height: 95px;
border-radius: 47px;
margin-top: 10%;
margin-left: 70px;
`

export const Slash = styled.div`
border: 1px solid #F0EFF0;
opacity: 1;
margin-top: 22px;
width: 170px;
margin-left: 32px;
`

export const Column = styled.div`
width: 0px;
height: 22px;
border: 1px solid #F6F4F6;
opacity: 1;
margin-left: 20px;
margin-top: 10px;
`

export const Text = styled.h1`
text-align: center;
letter-spacing: 0px;
color: #263238;
opacity: 1;
font-size: 16px;
width: 191px;
margin-left: 21px;
margin-top: 10px;
`

export const ButtonTrash = styled.button`
background-image: url(${iconeTrash});
background-repeat: no-repeat;
background-position: left;
text-align: right;
letter-spacing: 0px;
color: #263238;
width: 70px;
height: 19px;
opacity: 1;
margin-left: 27px;
margin-top: 13px;
font-size: 15px;
&:hover {
    color: #DB2525;
}
`

export const ButtonEdit = styled.button`
background-image: url(${iconeEdit});
background-repeat: no-repeat;
background-position: left;
text-align: right;
letter-spacing: 0px;
color: #263238;
width: 64px;
height: 19px;
opacity: 1;
margin-left: 20px;
margin-top: 13px;
font-size: 15px;
&:hover {
    color: #E76316;
}
`


