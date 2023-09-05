import './App.css';
import { ToDoCard } from './components/card/card';
import { Header } from './components/header/header';

function App() {
  return (
    <div className="App">
     <Header />
        <div> 
          <ToDoCard />
        </div>
    </div>
  );
}

export default App;
