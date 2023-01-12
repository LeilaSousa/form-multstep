import { BsEmojiFrownFill, BsEmojiHeartEyesFill, BsEmojiNeutralFill, BsEmojiSmileFill } from 'react-icons/bs'
import styled from 'styled-components'
import Container from '../layout/Container'
const H1= styled.h1`
    text-align: center;
`
const H2= styled.h2`
    text-align: center;
`
const P = styled.p`
    padding: .2rem 0; 
    text-align: center;
`
const emojiData = {
    unsatisfied: <BsEmojiFrownFill/>,
    neutral: <BsEmojiNeutralFill />,
    satisfied: <BsEmojiSmileFill />,
    verySatisfied: <BsEmojiHeartEyesFill />,
}

const Thanks = ({ data }) => {
    return(
        <Container>
        
            <H1>Falta Pouco</H1>
            <P>A sua opnião é muito importante, em breve você recebrá um cupoom de 10% de desconto para a sua próxima compra.
            </P>
            <P>
            Para concluir sua avaliação clique no botão de Enviar abaixo.
            </P>
            <H2>{data.name}, aqui está o resumo da sua avaliação:</H2>
            <P><strong>Satisfação com o  produto: </strong>
                {emojiData[data.review]}
            </P>
            <P><strong>Comentário: </strong>
                {data.coment}
            </P>
           
        </Container>
        )
}
export default Thanks