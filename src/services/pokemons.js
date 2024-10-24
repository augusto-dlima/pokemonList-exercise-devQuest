let pokemons = { pokemonList: [] }




async function getEndPoints() {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=250&offset=0`)
    const endPointList = await response.json()


    return endPointList

}

async function getPokemons(endPoints) {

    endPoints.map(async (urls) => {


        const response = await pokemonData(urls.url)




        if (pokemons.pokemonList.length <= 249) {

            pokemons.pokemonList = [...pokemons.pokemonList, response]


        }



    })

    return pokemons



}




async function abilitiesPokemon(abilityName) {

    const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}/`)
    const ability = await response.json()

    return ability

}




async function pokemonData(url) {

    const response = await fetch(url)
    const pokemon = await response.json()

    return pokemon

}




const dataValidate = (array, element) => {

    let dataRepeated = 0;




    array.map((elementArray) => {


        if (element.name === elementArray.name) {

            dataRepeated++

        }

    })




    if (dataRepeated >= 1) {

        return false
    }

    else {



        return true
    }

}

export { getEndPoints, getPokemons, dataValidate,  pokemonData, abilitiesPokemon }