import styled from 'styled-components'

const Main = styled.div`
  width:100%;
  & table {
    width:100%;
  }
  & .header {
    display:flex;
    justify-content:space-between;
    @media(max-width:768px){
      flex-direction:column;
    }
    h2 {

    }
  }
`
const Button = styled.button`
  background-color:#203F93;
  font-size:15px;
  width:140px;
  height:30px;
  display:flex;
  justify-content:flex-end
`
const SeparateContainer = styled.div`
flex:1;
display:flex;

&:last-child {
  justify-content:flex-end;
  @media(max-width:758px){
    justify-content:center;
  }
}&:first-child {
  justify-content:flex-start;
  @media(max-width:758px){
    justify-content:center;
  }
}
`
const Container = styled.div`
  display:flex;
  justify-content:space-between;
  margin : 1em 0;
  /* background-color:pink; */
  @media(max-width:758px){
    /* background-color:yellow; */
    flex-direction : column;
  }
  & > div > div {
    margin-top:30px;
    width:80%;
    border-radius : 10px;
    padding:1em;
    box-shadow: 0 2px 4px 2px rgba(153,153,153,0.10);
    /* background-color:blue */
    @media(max-width:758px){
      max-width:100%;
      padding:6px;
      width:100%;
    }

  }
`
const Row = styled.div`
  margin : 1em ;
  @media(max-width:758px){
    margin:6px;
  }
  }
`



export {Main,Container,Button,Row,SeparateContainer}
