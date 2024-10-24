import styled from "styled-components"
import { useParams } from "react-router-dom"
import React,{ useState, useEffect } from "react";
import { pokemonData, abilitiesPokemon, dataValidate } from "../../services/pokemons";
import { Link } from "react-router-dom";
import imagemDeFundo from '../../images/fundo-pokemon-azul.png'
import Loading from "../loading";


function pokemonDom(pokemonData) {


    return (

        <>


            <PokemonClass>


                <Link to={'/'}>

                    <Icon className="fas fa-arrow-left "></Icon>

                </Link>



                <Title >{pokemonData.pokemon.name} (Type {pokemonData.pokemon.types[0].type.name}) </Title>

                <PokemonData>


                    <PokemonImage src={pokemonData.pokemon.sprites.front_default} alt={`imagem do pokemon ${pokemonData.pokemon.name}`} />


                    <PokemonDataTitle>Movimentos</PokemonDataTitle>


                    <ul>


                        {pokemonData.pokemon.moves.map((movimentos, index) => {


                            if (index === pokemonData.pokemon.moves.length - 1) {


                                return (


                                    <ElementList key={movimentos.move.name}> {movimentos.move.name}.</ElementList>


                                )

                            }

                            else {



                                return (


                                    <ElementList key={movimentos.move.name}> {movimentos.move.name},</ElementList>


                                )


                            }


                        })}


                    </ul>


                    <PokemonDataTitle>Habilidades</PokemonDataTitle>

                    {




                        pokemonData.abilities.map((ability, index) => {


                            return (

                                <>


                                    <PokemonDataSubtitle key={index} > {ability.name} </PokemonDataSubtitle>

                                    {
                                        ability.effect_entries.map((effect, index) => {

                                            return (

                                                <p key={index}>{effect.effect}</p>

                                            )
                                        })



                                    }


                                </>


                            )

                        })

                    }






                </PokemonData>




            </PokemonClass>






        </>



    )



}




const InfoPokemon = () => {

    const [dataPokemon, setdataPokemon] = useState({
        pokemon: {},
        abilities: []
    });

    let abilitiesData = []
    const id = useParams();


    useEffect(() => {


        async function fetchData() {

            await pokemonData(`https://pokeapi.co/api/v2/pokemon/${id.id}/`).then((response) => {


                abilitiesData = []


                response.abilities.map(async (ability) => {


                    await abilitiesPokemon(ability.ability.name).then((getAbilities) => {


                        if (abilitiesData.length === 0) {

                            abilitiesData.push(getAbilities)

                        }

                        else if (abilitiesData.length > 0 && abilitiesData.length < response.abilities.length) {


                            if (dataValidate(abilitiesData, getAbilities)) {

                                abilitiesData.push(getAbilities)


                            }


                        }

                        else{


                            setdataPokemon({
                                pokemon: response,
                                abilities: abilitiesData
                            })

                        }


                    })



                })


            })


        }


        fetchData();



    }, [])




    return (



        <>


            {dataPokemon.pokemon.name != null ? pokemonDom(dataPokemon) :<Loading />}


        </>



    )




}



const PokemonClass = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    align-items: center;
    background-color:#FFFFFF;
    z-index:100;
    transition: 1s ease-in-out;



`


const Icon = styled.i`



   transition: 1s ease-in-out;
    margin-top: 50px;
    font-size: 40px;
    width: 100%;
    color: ${({theme})=>theme.background};

             @media screen and (max-width: 480px){
             font-size: 18px;
               
           
            
     }

`

const Title = styled.h1`

    font-size: 30px;
    color: #000000;
    font-family: "Protest Guerrilla", sans-serif;
    font-weight: 300;
    font-style: normal;
    margin: 40px;
    text-transform: uppercase;


         @media screen and (max-width: 480px){
             font-size: 18px;
                 margin: 30px;
           
            
     }

             

`


const PokemonData = styled.div`

    width: 90%;
    padding: 20px;
    line-height: 30px;
    text-align: justify;

                 @media screen and (max-width: 480px){
             font-size: 11px;
              width: 95%;
                line-height: 15px;
            
              }

`

const PokemonDataTitle = styled.p`

    font-size: 22px;
    color: #000000;
    font-family: "Protest Guerrilla", sans-serif;
    font-weight: 100;
    font-style: normal;
    display: flex;
    align-items: flex-start;
    margin: 0;
    margin: 20px 0;
    text-transform: capitalize;

     @media screen and (max-width: 480px){
         
         font-size: 16px;
            
     }
`

const PokemonDataSubtitle = styled.p`

    font-size: 16px;
    color: ${({theme})=>theme.background};
    font-family: "Protest Guerrilla", sans-serif;
    font-weight: 100;
    font-style: normal;
    display: flex;
    align-items: flex-start;
    margin: 0;
    margin: 10px 0;
    text-transform: capitalize;
     transition: 1s ease-in-out;
`

const PokemonImage = styled.img`

    width: 180px;
    border-radius: 200px;
    background-image: url(${imagemDeFundo});
    background-size: cover;
    border: 10px solid #FAC705;
    float: left;
    margin-right: 25px;
    margin-top: 35px;


         @media screen and (max-width: 1024px){
         
         
          width: 100px;
          border: 5px solid #FAC705;
            
         }


         @media screen and (max-width: 480px){
         
         
          width: 100px;
          border: 5px solid #FAC705;
            
         }

`


const ElementList = styled.li`

 display: inline;
   
`

export default InfoPokemon