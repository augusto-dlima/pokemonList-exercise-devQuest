import React, { useEffect } from "react"
import { useState } from "react"
import { getEndPoints, pokemonData, dataValidate } from "../../services/pokemons"
import Button from "../button"
import styled from "styled-components"
import Card from "../card"
import fundoSectionLight from '../../images/bg-main.png'
import fundoSectionDark from '../../images/bg-main-dark.png'
import { Link } from "react-router-dom"
import Error from '../error'
import Loading from '../loading'
let pokemonList = { list: [] }




const SetCards = (props, buttons, listDom) => {

    let indexInicial = 0;
    let indexFinal = listDom * 10;

    listDom === 1 ? indexInicial = 0 : indexInicial = (listDom - 1) * 10;




    return (

        <BgMain>



            <SectionCardElements>

                {



                    props.pokemons.map((pokemon, indexPokemon) => {


                        if (indexPokemon >= indexInicial && indexPokemon < indexFinal) {



                            return (

                                <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none' }} >

                                    <Card key={pokemon.name} title={pokemon.name} img={pokemon.sprites.front_default} />


                                </Link>


                            )




                        }





                    })




                }

            </SectionCardElements>



            {




                listDom <= 1 ? buttons() : buttons()

            }





        </BgMain>

    )

}





const PokemonCard = () => {

    const [pokemon, setPokemon] = useState({ pokemons: [] })
    const [listDom, setListDom] = useState(1)
    const [error,setError]= useState(false)


    useEffect(() => {

        async function fetchdData() {

            try {

                await getEndPoints().then((response) => {

                    pokemonList = { list: [] }


                    response.results.map(async (pokemon) => {


                        const responsePokemon = await pokemonData(pokemon.url)

                        if (pokemonList.list.length === 0) {

                            pokemonList.list = [...pokemonList.list, responsePokemon]

                        }

                        else if (pokemonList.list.length > 0 && pokemonList.list.length < response.results.length) {


                            if (dataValidate(pokemonList.list, pokemon)) {


                                pokemonList.list = [...pokemonList.list, responsePokemon]

                            }



                        }

                        else {


                            setPokemon({ pokemons: [...pokemonList.list] })


                        }


                    })




                })

            } catch (err) {

 
                setError(true)


            }


        }

        fetchdData()

    }, [])



    const setButtons = () => {

        if (listDom <= 1) {

            return (



                <ButtonElement>

                    <Button title="Avançar" cardsList={() => { setListDom(listDom + 1) }} />


                </ButtonElement>




            )


        }

        else {

            return (



                <ButtonElements>

                    <Button title="Voltar" cardsList={() => { setListDom(listDom - 1) }} />
                    <Button title="Avançar" cardsList={() => { setListDom(listDom + 1) }} />

                </ButtonElements>




            )



        }




    }




    return (

        <>


            {pokemon.pokemons.length > 0 && error === false? SetCards(pokemon, setButtons, listDom) : error === true? <Error/> :<Loading /> }

       

      

        </>



    )




}




const BgMain = styled.section`

    width: 100%;
    height: 100vh;
    background-image:url(${({ theme }) => theme.backgroundMain === 'light' ? `${fundoSectionLight}` : `${fundoSectionDark}`}); 
    background-size:cover;
    background-position:center center;
    // position: relative;
     transition: 10ms ease-in-out;
   
`



const SectionCardElements = styled.section`

 width: 100%;
 height: 85vh;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 padding: 120px 200px 130px 200px;
 transition: 10ms ease-in-out;


     @media screen and (max-width: 1024px){
        padding: 120px 50px 130px 50px;
     }
 

    @media screen and (max-width: 768px) {

     padding: 110px 20px 120px 20px;

    
    }


     @media screen and (max-width: 468px) {

    padding:  100px 5px 150px 5px;
 
    
    }


`

const ButtonElements = styled.div`

width:100%
height:100%;
display: flex;
justify-content:space-around;
margin-top: 20px ;
`

const ButtonElement = styled.div`

width:100%
height:100%;
display: flex;
justify-content: flex-end;
width:100%
height:100%;
display: flex;
justify-content: flex-end;
margin-top: 20px ;
padding-right: 300px;


     @media screen and (max-width: 1024px){
        padding-right: 220px;
     }
 

    @media screen and (max-width: 768px) {


    margin-top: 0px ;
    padding-right: 150px;
    
    
    }


     @media screen and (max-width: 468px) {
 
         margin-top: 0px ;
         padding-right: 50px;
    
    }

`





export default PokemonCard