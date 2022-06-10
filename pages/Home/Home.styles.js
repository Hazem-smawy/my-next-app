import styled from 'styled-components'
export const Container = styled.div`
    margin:0 auto;
    
    width:90vw;
    padding:0 .5rem 0;
    background:${(prop)=>prop.theme.colors.bg}
`
export const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem;
    margin:0rem .3rem 1rem;
    color:${(prop)=>prop.theme.colors.black};
    font-size:1.3rem;
    
`
export const Logo = styled.div`
padding:.5rem;
background-color:${(prop)=>prop.theme.colors.boxSecond};

`
export const App = styled.nav`
padding:.5rem;
background-color:${(prop)=>prop.theme.colors.boxSecond};

`
export const TextTitle = styled.div`
   
    margin-bottom:1rem;
    font-family:c;
        h2 {
            color:${(prop)=>prop.theme.colors.black};
        }
        p {
            color:${(prop)=>prop.theme.colors.p};
            margin-top:-.5rem;
            font-size:.8rem;
            margin-left:.5rem;
        }

`
export const Categories = styled.div`
    hieght:60px;
    display:flex;
    justify-content:space-between;;
    
`
export const CatItem = styled.div`
        margin-right:.5rem;
        height:50px;
        width:50px;
        background-color:${(prop)=>prop.theme.colors.boxSecond};
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1.5rem;
        border-radius:.5rem;
`
export const SlidersBox = styled.div`
margin: 1rem 0 1rem;
display: grid;
grid-template-columns: 50px 1fr;
height:170px;
`
export const FirstCol = styled.div`
display:flex;
flex-direction:columns;
margin-top:1rem;

div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 2fr 2fr;
    justify-content: center;
    align-items: center;

    a {
        font-weight:bold;
        font-family:'m';
        transform:rotate(270deg);
        text-align:center;
    }
}
`
export const LinkItem = styled.div``
export const Sliders = styled.div`
 height:100%;
 width:100%;
 border-radius: 0.7rem;
 background-color:${(prop)=>prop.theme.colors.box};
 position:relative;
 
 
 

`

export const Slide = styled.div`
 display:flex;
 width:100%;
 text-align:center;
 justify-content: center;
 
`
export const SlideImage = styled.div`
hieght:100%;
width:100%;
background-color:${(prop)=>prop.theme.colors.boxFirst};
border-radius: 0.7rem;
overflow:hidden;

`
export const TextBox = styled.div`
position: absolute;
font-family:'m';
background: #eee;
bottom:.5rem;
padding: 0.5rem;
width: 90%;
border-radius: 0.3rem;
display: grid;
grid-template-columns:3.5fr 1fr;
justify-content: space-between;
align-items: center;
gap:.4rem;

button {
    font-family:'m';
    ouline:none;
    border:none;
    background-color:${(prop)=>prop.theme.colors.btnSecond};
    width:fit-content;
    padding:.5rem;
    color:${(prop)=>prop.theme.colors.white};
    border-radius:.4rem;
    white-space:nowrap;
    text-overflow:ellipsis;
}
div {
    text-align:left;

}
div h3 {
    font-size:1rem;
    color:${(prop)=>prop.theme.colors.supTitle};
}
div p {
    font-size:.8rem;
    color:${(prop)=>prop.theme.colors.p};
}
`
