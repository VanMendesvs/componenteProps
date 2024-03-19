import React from "react"
import Barra from "./assets/barra.jpeg"
import Caixa from "./assets/caixa.jpg"
import Ovo from "./assets/ovo.jpeg"
import ComponenteComProps from "./components/componentecomprops.jsx"
import styled from "styled-components"

const Section = styled.section`
  border: solid red;
  display: flex;
  justify-content: space-evenly;

`


function App() {

  return (
    <Section>
      
      <ComponenteComProps produto="Ovo de Pascoa" valor="300,00" imagem={Ovo}>
      <h2>Promoção</h2>
      <h6>Pagando no PIX 299,00</h6>
    </ComponenteComProps>
    <ComponenteComProps produto="Barra de Chocolate" valor="8,99" imagem={Barra}/>
    <ComponenteComProps produto="Caixa de Bombom" valor="12,99" imagem={Caixa}/>

    </Section>
    
  )
}

export default App
