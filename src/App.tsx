import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Mint from "./views/Mint";
import MintSuccess from "./views/MintSuccess";
import NotFound from "./views/NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Mint} />
      {/* <Route path="/mint" element={<Mint />} /> */}
      <Route exact path="/success" component={MintSuccess} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
)

export default App
