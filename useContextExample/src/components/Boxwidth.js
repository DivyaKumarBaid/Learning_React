import { useThemeToggle, useThemeValue } from "./Theme";

export const Boxwidth = () => { 
    
    const theme = useThemeValue(); // use the providers value of the useThemeValue custom hook 
    const themetoggle = useThemeToggle(); // use the providers value of the useThemeToggle custom hook

    const ThemeStyle = {
        background: theme ? '#333' : '#ccc',
        color: !theme ? '#333' : '#ccc',
        width: '250px',
        height:'250px'
    }

    return (
        <>
            <button onClick={themetoggle}>Toggle</button>
            <div className="rect" style={ThemeStyle}>
            HI
            </div>
        </>
    )
}