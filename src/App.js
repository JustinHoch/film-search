

// Routing
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import TVPage from './pages/TVPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  
  

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/movie/:name" component={MoviePage} />
        <Route path="/tv/:name" component={TVPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
