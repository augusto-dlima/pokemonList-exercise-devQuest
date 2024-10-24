import { keyframes } from "styled-components"
import styled from "styled-components"
import fundo from '../../images/loading.png'


const Loading = () => {


    return (

        <LoadingDiv>
            <LoadingComponente></LoadingComponente>
        </LoadingDiv>

    )

}

const LoadingDiv = styled.div`

width:100%;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
border-radius:100%;
background-image: url(${fundo});
background-size: 5%;
background-position: center center;
background-repeat: no-repeat;


 @media screen and (max-width: 468px) {
 
 background-size: 15%;
 
 }



`

const Rotate = keyframes`

0%{

transform: rotate(0deg);

}

100%{

transform: rotate(360deg);

}

`
const LoadingComponente = styled.div`

width:150px;
height:150px;
border-radius:100%;
border-left: 2px solid ${({ theme }) => (theme.background)};
animation:${Rotate} 0.9s linear infinite;
display:flex;
justify-content:center;
align-items:center;
position:relative;

`


export default Loading