
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import Transaction from './components/Transaction'
import Add from './components/Add'
import { GlobalProvider} from './State/InitialState'
function App() {
  return (
    <GlobalProvider>
    <div className="App mx-auto text-muted">
   <Header/>
   <div className="container">
   <div className="card">
  <Balance/>
    </div>
    </div>
    <Income/>
    <Transaction/>
    <Add/>
    </div>
</GlobalProvider>
  );
}

export default App;
