import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AuthPage from './components/auth';
import ViewProgrammers from './components/viewProgrammersList';
import './App.css';
import DogTinderComponent from './components/dog-tinder/dog-tinder';
import DogTinderListComponent from "./components/dog-tinder/dog-tinder-list"

interface Props {}
interface State {}
class App extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    console.log(this.props)

    return (
      <Router>
        <div className="App">
          <Link to='/tinder'>Tinder</Link> {" "}
          <Link to='/tinder-list'>Stats</Link>
          <Route exact path="/" component={AuthPage} />
          <Route exact path="/view-programmers" component={ViewProgrammers} />
          <Route exact path="/tinder" component={DogTinderComponent} />
          <Route exact path="/tinder-list" component={ DogTinderListComponent } />
          <div />
        </div>
      </Router>
    );
  }
}

export default App;
