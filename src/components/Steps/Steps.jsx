import styled from 'styled-components'
import './steps.css'
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

const StepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    text-align: center;
    margin-top: 1rem;
`
const Steps = ({ currentStep }) => {

    return(
        <StepsContainer>
            <div className='step active'>
                <p>Identificação</p>
                <AiOutlineUser />
            </div>

            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                <p>Avaliação</p>
                <AiOutlineStar />
            </div>

            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                <p>Envio</p>
                <FiSend />
            </div>
        </StepsContainer>
    )      
}
export default Steps