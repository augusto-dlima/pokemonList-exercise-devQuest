import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokemonCard from "../components/pokemon-card/"
import InfoPokemon from "../components/Pokemon/"




const AppRoutes = () => {

    return(

    <BrowserRouter>

        <Routes>


            <Route exact path="/" element={<PokemonCard />} />
            <Route exact path="/pokemon/:id" element={<InfoPokemon/>} />

        </Routes>


    </BrowserRouter>

)


}


export {AppRoutes}