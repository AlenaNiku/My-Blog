import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// URL parameters (for navigating to the right pages withing one route). The way they work is this - when we define our route we use a /:name (or /:id) for one of the segments of our path (we'll use <name> for our url parameter). What React Router does when it sees the URL parameter as this one - it passes a prop to the component at that route (in our case ArticlePage), that tells our component the value of the section of our url. In other words the string that occupies this spot - :/name (in the url in the user's browser) => React will pass a prop called { match } to our component

// Switch makes sure that only one of the appropriate Routes is rendered at a time. It will only render the first route that matches the url and none of the others. For this reason order matters - we must put our 404 component last, otherwise it will be the only thing that renders since it will always match (ORDER MATTERS)



