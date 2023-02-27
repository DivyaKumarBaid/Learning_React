import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'
import Data from './components/Data'

function App() {

  const value = Data.map(props =>
    <Card key={props.id} props={props} />
  )

  return (
    <div className="container">
      <Nav />
      {value}
    </div >
  );
}

export default App;
