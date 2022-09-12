import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./views/Home";
import Mint from "./views/Mint";
import MintSuccess from "./views/MintSuccess";
import NotFound from "./views/NotFound";

const App = () => {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Mint />} />
        {/* <Route path="/mint" element={<Mint />} /> */}
        <Route path="/success" element={<MintSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
