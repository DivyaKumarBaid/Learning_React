import React, { useContext, useState } from 'react';

const ThemeValue = React.createContext()
const ThemeToggle = React.createContext()

export function useThemeValue() { 
    return useContext(ThemeValue);
}
export function useThemeToggle() { 
    return useContext(ThemeToggle);
}

export function ThemeProvider ({children}){
    
    const [currTheme, setTheme] = useState(false);
    
    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme)
    }

    return (
        <ThemeValue.Provider value={currTheme}>
            <ThemeToggle.Provider value={toggleTheme}>
                {children}
            </ThemeToggle.Provider>
        </ThemeValue.Provider>
    );
}