
import Home from './pages/home';
import About from './pages/about';
import Search from './pages/search';
import Signin from './pages/signin';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Error404 from './pages/NoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
