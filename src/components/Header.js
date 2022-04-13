import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <ContainerHeader>
        <a href='/'>
            <img src='/pokeball.png' style={{ width: "40px", height: "40px" }} alt='A pokeball icon'></img>
            <p><strong>BARKIDEX</strong></p>
        </a>
    </ContainerHeader>
  )
}

export default Header


const ContainerHeader = styled.div`
background-color: yellow;
color: black;
width: 100%;
height: 70px;
display:flex;
align-items: center;
a{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: black;
}
img{
    margin-left: 50px;
    margin-right: 10px;
}
`;