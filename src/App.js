import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';



function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
