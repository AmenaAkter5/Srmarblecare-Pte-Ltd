import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <header></header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
