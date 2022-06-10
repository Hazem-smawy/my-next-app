import styled from 'styled-components'
import Image from 'next/image'
export const Container = styled.div`
 {
   position:relative;
   height:100vh;
}
`
export const ImageHome = styled.div`
position:absolute;
width:100%;
height:100%;
`
export const Text = styled.div`

z-index: 2;
left: 50%;
top: 15%;
transform: translate(-50%, -50%);
color: wheat;
position: absolute;
text-transform: uppercase;
text-align:center;
`
export const DescriptionCaption =styled.p`
 padding:1rem;
 color:${(prop)=>(prop.theme.colors.p)};
 font-family:'m';

`
export const FirstHeader = styled.h2`
color:${(prop)=>(prop.theme.colors.white)};
font-family:'c';
letter-spacing:1px;
font-size:2rem;
`
export const Btn = styled.button`
position: absolute;
width: 50px;
height: 50px;
border: none;
outline: one;
border-radius: 50%;
left: 50%;
-webkit-transform: translateX(-50%);
-ms-transform: translateX(-50%);
transform: translateX(-50%);
z-index: 2;
bottom: 15rem;
font-size: 2rem;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
box-shadow: 0px 0px 10px 2px #0cdc0c80;
background: ${(prop)=>prop.theme.colors.first}

`
