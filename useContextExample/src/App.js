import './App.css';
import { ThemeProvider } from './components/Theme';
import { Boxwidth } from './components/Boxwidth';

function App() {
  return (
    <ThemeProvider>
      <Boxwidth/>
    </ThemeProvider>
  );
}

export default App;
