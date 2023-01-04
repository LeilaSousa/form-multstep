import styled from 'styled-components'

import Header from './Header';
import ReviewContainer from './ReviewForm/Reviewform';
import Thanks from './Thanks';
import UserForm from './UserForm';
import Steps from './Steps/Steps';
import useForm from '../hooks/useForm';

import { useState } from 'react';

import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

const Actions = styled.div`
  text-align: center;
`
const Button = styled.button`
  padding: .5rem;
  margin: .5rem;
  background-color: var(--gray);
  color: #f5f5f5;
  border: 0;
  border-radius: .2rem; 
  cursor: pointer;
`

const formTemplate = {
  name:"",
  email:"",
  review:"",
  coment:"",
}

const Rating = () =>{

  const [data, setData] = useState(formTemplate)

  const upDateField = (key, value) => {
    setData((prev) => {
      return {...prev, [key]:value }
    })
  }

  const formComponents = [ 
  <UserForm data={data} upDateField={upDateField}/>,
  <ReviewContainer data={data} upDateField={upDateField}/>,
  <Thanks data={data} upDateField={upDateField}/>]

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep  } = useForm(formComponents)

    return(<>
      <Header />
      <Steps currentStep={currentStep}/>
    
      <form onSubmit={(e) => changeStep(currentStep + 1, e, console.log(data))}>

      { currentComponent }           
    
      <Actions>

        {!isFirstStep &&
        (<Button type="button" onClick={() => changeStep(currentStep - 1)}>
          <GrFormPrevious />
          <span>Voltar</span>
        </Button>) }
      
        {!isLastStep ? 
        (<Button type='submit'>
          <GrFormNext />
          <span>Avançar</span>
        </Button>) : 
        (<Button type='submit'>
          <FiSend />
          <span>Enviar</span>
        </Button>) }
      
    </Actions>
  </form>
</> )
}
export default Rating