
import styled from "styled-components"


const Button = (props) => {


    return (



        <StyledBtn onClick={() => { props.cardsList() }}>


            {props.title}


        </StyledBtn>

    )

}


const StyledBtn = styled.button`

    width: 100px;
    height: 40px;
    border-radius: 20px;
     transition: 1s ease-in-out;
    background-color: ${(props)=> props.theme.background};
    color: ${(props)=>props.theme.color};
    font-size: 15px;
    border: none;
    font-family: "Protest Guerrilla", sans-serif;
    font-weight: 400;
    font-style: normal;
    border: 1px solid white;
  
   &:hover{

    cursor: pointer;
    color: ${(props)=>props.theme.background};
    transition: 10ms ease-in-out;
    background-color: ${(props)=> props.theme.color} ;
   
   }


     @media screen and (max-width: 480px){

      font-size: 11px;
      width: 80px;
      height: 20px;
   
     }


`

export default Button