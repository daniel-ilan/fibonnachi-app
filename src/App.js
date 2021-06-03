import './App.css';
import Fibonnachi from './components/Fibonnachi';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/:num'>
          <Fibonnachi />
        </Route>
        <Route path='/'>
          <Fibonnachi />
        </Route>
      </Router>
    </div>
  );
}

export default App;
