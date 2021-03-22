import './App.css';
import Apples from './components/Apples';
import Mangoes from './components/Mangoes';
import Oranges from './components/Oranges';
import Summary from './components/Summary';

function App() {
  return (
    <div className='App'>
      <Summary />
      <Apples />
      <Oranges />
      <Mangoes />
    </div>
  );
}

export default App;
