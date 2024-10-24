import styled from "styled-components"

const Error = () => {

    return (



        <PageError>

      
            <Icon className="fas fa-times"></Icon>

                <TextStyle>Atualize a pagina!</TextStyle>


           </ PageError>




    )



}

const PageError = styled.div`

width:100%;
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
line-height:100px;
 font-family: "Protest Guerrilla", sans-serif;
 font-size:20px;
 color:${({theme})=>(theme.background)};
 transition: 1s ease-in-out;

    @media screen and (max-width: 468px){
    
     font-size:11px;
     width:100%;
     line-height:35px;
     padding:0;
    
    
    }

`

const TextStyle = styled.h1`
// color: #e5e5e5;
font-weight: 700;

  @media screen and (max-width: 468px){
    
     font-size:20px;
     text-align: center;
    //  padding:3px;
    
    }


`



const Icon = styled.i`

font-size:80px; 

`

export default Error