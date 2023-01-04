import { BsEmojiFrownFill, BsEmojiHeartEyesFill, BsEmojiNeutralFill, BsEmojiSmileFill } from 'react-icons/bs'
import styled from 'styled-components'
import Container from '../layout/Container'
const TextContainer = styled.div`
    text-align: center;
    padding: 3rem;
`
const P = styled.p`
    padding: .5rem 0; 
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
            <TextContainer>
            <h1>Falta Pouco</h1>
            <P>A sua opnião é muito importante, em breve você recebrá um cupoom de 10% de desconto para a sua próxima compra.
            </P>
            <P>
            Para concluir sua avaliação clique no botão de Enviar abaixo.
            </P>
            <h2>{data.name}, aqui está o resumo da sua avaliação:</h2>
            <P><strong>Satisfação com o  produto: </strong>
                {emojiData[data.review]}
            </P>
            <P><strong>Comentário: </strong>
                {data.coment}
            </P>
            </TextContainer>
        </Container>
        )
}
export default Thanks