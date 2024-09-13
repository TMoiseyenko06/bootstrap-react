import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import './App.css'
import NotFound from "./NotFound";

function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </div>
  )
}

export default App
