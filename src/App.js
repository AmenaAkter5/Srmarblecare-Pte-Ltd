import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";


function App() {
  return (
    <div id="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
