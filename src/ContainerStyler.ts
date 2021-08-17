import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-rows: 1fr 1.5fr;
  height: 100vh;
  width: 1440px;
`
export const Bio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  border: 1px solid black;
`
export const Projetos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  /* justify-content: space-between; */
  align-items: flex-start;
 
  border: 1px solid black;

  ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  width: 600px;

  img{
    max-width: 400px;
    max-height: 200px;
  }
`
