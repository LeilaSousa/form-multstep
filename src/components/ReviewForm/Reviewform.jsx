import { 
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill} from 'react-icons/bs'
import Container from '../../layout/Container'
import './review.css'
import styled from 'styled-components'

const Coment = styled.div`
    display:flex;
    flex-direction: column;
    margin: 3rem;
`
const ReviewForm = styled.div`
    padding: 2.5rem;
`
const RadioContainer = styled.label`
    text-align: center;
    position: relative;
    & input{
        opacity: 0;
        position: absolute;
    }
`
const ReviewContainer = ({ data, upDateField }) => {
   
    return( 
        <Container>
        <ReviewForm>
            <div className="score-container">
                <RadioContainer>
                    <input
                    type="radio"
                    value="unsatisfied"
                    name="review"
                    required
                    checked={data.review === "unsatisfied" || ""}
                    onChange={(e) => upDateField("review", e.target.value)}/>
                    <p>Insatisfeito</p>
                    <BsFillEmojiFrownFill />
                </RadioContainer>

                <RadioContainer>
                    <input
                    type="radio"
                    value="neutral"
                    name="review"
                    required
                    checked={data.review === "neutral" || ""}
                    onChange={(e) => upDateField("review", e.target.value)}/>
                    <p>Neutro</p>
                    <BsFillEmojiNeutralFill />
                </RadioContainer>

                <RadioContainer>
                    <input
                    type="radio"
                    value="satisfied"
                    name="review"
                    required
                    checked={data.review === "satisfied" || ""}
                    onChange={(e) => upDateField("review", e.target.value)}/>
                    <p>Satisfeito</p>
                    <BsFillEmojiSmileFill />
                </RadioContainer>

                <RadioContainer>
                    <input
                    type="radio"
                    value="verySatisfied"
                    name="review"
                    required
                    checked={data.review === "verySatisfied" || ""}
                    onChange={(e) => upDateField("review", e.target.value)}/>
                    <p>Muito Satisfeito</p>
                    <BsFillEmojiHeartEyesFill />
                </RadioContainer>
            </div>
            <Coment>
                <label htmlFor="coment">Comentário</label>
                <textarea name="coment" id="coment"placeholder="Conte como foi sua experiência com o produto"
                rows="5" required 
                data={data.coment || ''}
                onChange={(e) => upDateField("coment", e.target.value)}/>
            </Coment>            
        </ReviewForm>
        </Container>
 )
}
export default ReviewContainer