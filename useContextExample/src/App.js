import './App.css';
import { ThemeProvider } from './components/Theme';
import { Boxwidth } from './components/Boxwidth';


//this is an example for useContext Hook
function App() {
  return (
    //theme provider works as an external function that accepts children as params

    <ThemeProvider>
      <Boxwidth/>
    </ThemeProvider>
  );
}

export default App;
