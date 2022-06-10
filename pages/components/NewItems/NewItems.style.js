import styled from 'styled-components'

export const HomeNewItemsContainer = styled.div`
margin-top:3.5rem;

h2 {
    font-size:1.3rem;
    margin-bottom:1rem;
    font-family:'c';
    color:${(prop)=>prop.theme.colors.black};
}

`
export const  ItemsContainer = styled.div`
column-count: 2;
column-gap: 1rem;
margin: 1rem 0;
padding: 3px;

`
export const ItemBox = styled.div`
 position:relative;
 overflow:hidden;
 border-radius:.5rem;
 background:${(prop)=>prop.theme.colors.boxSecond};
 margin-bottom:.5rem;

 `
 export const ItemImage = styled.div`
    border-radius:.5rem;
    overflow:hidden;
 `
 export const Love = styled.span`
    position:absolute;
    left:0;
    top:0;
    z-index:1;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${(prop)=>prop.theme.colors.btnSecond};
    padding:.5rem;
    color:${(prop)=>prop.theme.colors.white};
 `
 export const ItemText = styled.div`
 font-family:'m';
 position:relative;

    button{
        display:flex;
        justify-content:center;
        align-items:center;
        position:absolute;
        bottom:0;
        right:0;
        ouline:none;
        border:none;
        background-color:${(prop)=>prop.theme.colors.box};
        padding:.5rem;
        color:${(prop)=>prop.theme.colors.white};
        border-radius:.4rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        font-size:1.3rem;
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