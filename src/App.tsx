import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
