import styled from "styled-components"
import fundoCardLight from '../../images/fundo-pokemon.png'
import fundoCardDark from '../../images/fundo-pokemon-azul.png'


const Card = (props) => {


    return (

        <>

            <DivCard>

                <ImgCard src={props.img} alt={props.title} />
                <TitleCard>{props.title}</TitleCard>

            </DivCard>

        </>

    )



}

const TitleCard = styled.h1`

  
    width: 80%; 
    height:11%;
    font-family: "Protest Guerrilla", sans-serif;
    font-size: 18px;
    font-weight: 700;
    font-style: normal;
    border-radius: 3px;
    text-transform: uppercase;
    text-align: center;
    color:${props=>props.theme.background};
    background-color:#FFFFFF;
     transition: 1s ease-in-out;
  

`

const DivCard = styled.div`

    width: 180px;
    height:200px;    
    background-image:url(${({theme})=>(theme.CardFundo === 'light'?`${fundoCardLight}`:`${fundoCardDark}`)});   
     transition: 1s ease-in-out;
    margin-right: 25px;
    background-size:cover;
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-radius: 30px;
    

    &:hover{

     transition: ease-in-out 5ms;
    box-shadow: 1px 1px 80px 1.9px #ffffff;
    margin-top: 25px ;

    }


         @media screen and (max-width: 1280px){
      width: 150px;
      height:180px;

       > ${TitleCard}{
    
             font-size: 14px;
             height:11%;
    
          }
     }

     @media screen and (max-width: 1024px){
      width: 130px;
      height:150px;

       > ${TitleCard}{
    
             font-size: 14px;
             height:11%;
    
          }
     }



     @media screen and (max-width: 768px){
      width: 120px;
      height:140px;
      margin-top: 25px;
      margin-right: 15px;
      border-radius: 20px;

          > ${TitleCard}{
    
             font-size: 14px;
             height:11%;
    
          }

     }


     @media screen and (max-width: 480px){
      width: 100px;
      height:100px;
      margin-top: 5px;
      margin-right: 10px;
      border-radius: 10px;

          > ${TitleCard}{
    
             font-size: 9px;
             height:11%;
    
          }

              &:hover{

                  transition: ease-in-out 5ms;
                  box-shadow: 1px 1px 80px 1.9px #ffffff;
                  margin-top: 2px ;

             }


     }
     }




`



const ImgCard = styled.img`

width:65%;

`



export default Card