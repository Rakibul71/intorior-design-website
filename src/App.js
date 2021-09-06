import Nav from './Components/NavBar/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact'
import Exterior from './Components/Works/Exterior/Exterior'
import FloorPlan from './Components/Works/FloorPlan/FloorPlan';
import Interior from './Components/Works/Interior/Interior';
import Pop from './Components/Works/Pop/Pop';
import SitePlan from './Components/Works/SitePlan/SitePlan'


function App() {
  return (
    <Router>
        <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/exterior" component={Exterior} />
            <Route path="/floorPlan" component={FloorPlan} />
            <Route path="/interior" component={Interior} />
            <Route path="/pop" component={Pop} />
            <Route path="/sitePlan" component={SitePlan} />
        </Switch>
    </Router>
  );
}

export default App;
