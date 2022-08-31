import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import Mint from "./views/Mint";
import NotFound from "./views/NotFound";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
