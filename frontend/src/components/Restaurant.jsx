import styled from 'styled-components'

export const Restaurant = () => {
  return (
    <Container>
      <h1> RESTAURANT ?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, maxime magni delectus numquam quod illum, modi harum voluptates dicta cupiditate ex necessitatibus voluptatum officia quas sunt ipsum cumque sapiente nihil.</p>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 50px;
  text-align: center;
  color: #44554b;
  height: 400px;
  width:80%;
  max-width: 1000px;
  margin: auto;
  @media (min-width: 1000px) {
    padding-top: 100px;
  }
  h1 {
    margin: 0 0 25px 0;
    font-size: 40px;
    font-weight: 700;
    @media (min-width: 700px) and(max-width: 1200px) {
      font-size: 55px;
    }
    @media (min-width: 1000px) {
      font-size: 70px;
    }
  }
`