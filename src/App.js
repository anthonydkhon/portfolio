import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Navigation from './pages/components/navbar/navbar';
import Banner from './pages/Banner/banner';
import Footer from './pages/Footer/footer';
import About from './pages/About/aboutme';
import ProjectPage from './pages/Projects/projectPage';
import ContactPage from './pages/Contact/contactPage';
import PokeDexGo from './pages/Projects/pokedexgo';
import LumioseCity from './pages/Projects/lumiosecity';
import MusicPlayer from './pages/Projects/musicplayer';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
      <div>
        <Banner />
      </div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/pokedexgo" component={PokeDexGo} exact={true} />
        <Route path="/lumiosecity" component={LumioseCity} />
        <Route path="/musicplayer" component={MusicPlayer} />
      </Switch>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
