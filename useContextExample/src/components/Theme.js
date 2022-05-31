import React, { useContext, useState } from 'react';

const ThemeValue = React.createContext() //new context is created
const ThemeToggle = React.createContext() //new context is created

export function useThemeValue() { //custom hook exported that contains the theme 
    return useContext(ThemeValue);
}
export function useThemeToggle() { //custom hook exported that contains the toggle function
    return useContext(ThemeToggle);
}

export function ThemeProvider ({children}){
    
    const [currTheme, setTheme] = useState(false); //state that contains curr theme
    
    //function that toggles curr theme
    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme)
    }

    //example of context hook
    return (
        //themevalue is a context that has a provider containing value = {theme}
        <ThemeValue.Provider value={currTheme}>

            {/* themetoggle is a context that has a provider containing value = {toggletheme} */}
            <ThemeToggle.Provider value={toggleTheme}>

                {children}
                {/* conponent that is passed in themeprovider in app.js */}

            </ThemeToggle.Provider>

        </ThemeValue.Provider>
    );
}