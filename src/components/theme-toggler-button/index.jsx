import React, { useContext } from "react"
import { ThemeContext, themes } from "../theme"
import Button from "../button"



export const ThemeTogglerButton = ()=>{


    const {theme, setTheme} = useContext(ThemeContext)



return(

<div>


    <Button title="Alterar tema" cardsList={()=>{setTheme(theme===themes.light?themes.dark:themes.light)}} />



</div>

)


}