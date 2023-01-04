import styled from 'styled-components'

import Container from '../layout/Container'

const FormContainer = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Label = styled.label`
    font-weight: bold;
`
const Input = styled.input`
    padding: .5rem;
    border: 0;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    margin:  .5rem 0;
`

const UserForm = ({ data, upDateField}) => {
    return( 
    <Container>
        <FormContainer>
            <Label>Nome</Label>
            <Input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
            value={data.name || ''}
            onChange={(e) => upDateField("name", e.target.value)} />

            <Label>E-mail</Label>
            <Input
            type="email"
            name="email"
            placeholder="email@email.com"
            required 
            value={data.email || ''}
            onChange={(e) => upDateField("email", e.target.value)} /> 
        </FormContainer>
    </Container>    
    )
}
export default UserForm
