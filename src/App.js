import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Comment from './component/Comment/Comment';
import NoMatch from './component/NoMatch/NoMatch';

function App() {
  return (
<Router>
  <Switch>
    <Route path="/home">
    <Home/>
    </Route>
    <Route path="/comments/:cComment">
    <Comment/>
    </Route>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route>
    <NoMatch/>
    </Route>
  </Switch>
</Router>


  );
}

export default App;
