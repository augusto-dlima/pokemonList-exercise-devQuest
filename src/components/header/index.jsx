import { ThemeTogglerButton } from "../theme-toggler-button"
import styled from "styled-components"


const Header = () => {

    return (


        <Menu>


            <ElementosMenu>

                <DivImg>

                    <Image src="../../src/images/logo-menu.png" alt="" />

                </DivImg>



                <ThemeTogglerButton></ThemeTogglerButton>



            </ElementosMenu>




        </Menu>





    )


}


const Menu = styled.div`

width: 100%;
height: 100px;
 transition: 1s ease-in-out;
background-color:${(props) => props.theme.background} ;
position: fixed;
// padding: 20px 50px 20px 120px;
z-index: 1;

     @media screen and (max-width: 768px){
     height: 80px;
     }

     @media screen and (max-width: 480px){
      padding: 20px;
     }


`

const ElementosMenu = styled.div`

    display: flex;
    width: 100%;
    height:100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 200px;

     @media screen and (max-width: 1024px){
      padding-right: 120px;
     }

     @media screen and (max-width: 468px){
      padding-right: 50px;
     }



`

const DivImg = styled.div`

width: 200px;
margin-left:250px;

     @media screen and (max-width: 1024px){
      width: 150px;
      margin-left: 70px;
     }

     @media screen and (max-width: 768px){
      width: 100px;
     }

     @media screen and (max-width: 480px){
      width: 100px;
      margin-left:35px;
     }


`

const Image = styled.img`

 width: 100%;

`

export default Header