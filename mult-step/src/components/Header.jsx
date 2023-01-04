import styled from 'styled-components'

const HeaderContainer = styled.div`
    text-align: center;
    padding: 2rem;
`
const H2 = styled.h2`
    padding: 2rem;
`
const Header = () => {
    return(
        <HeaderContainer>
            <H2>Deixe sua avaliação</H2>
            <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar nosso produto</p>
        </HeaderContainer>
    )
}
export default Header