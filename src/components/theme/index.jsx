import React, { createContext, useState } from "react";
import { json } from "react-router-dom";



export const themes = {

    light: {

        background: '#fac705',
        color: '#FFFFFF',
        CardFundo: 'light',
        backgroundMain: 'light'


    },
    dark: {

        background: '#3D64B8',
        color: '#FFFFFF',
        CardFundo: 'dark',
        backgroundMain: 'dark'


    }

}


export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')))
    
    if(localStorage.length<=0){
        
        localStorage.setItem('theme',JSON.stringify(themes.light))
    }
    
    else{

        localStorage.setItem('theme',JSON.stringify(theme))

    }
    
    

    return (

        <ThemeContext.Provider value={{ theme, setTheme }} >

            {props.children}

        </ThemeContext.Provider>


    )



}