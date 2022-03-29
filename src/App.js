import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Creator from "./components/Creator";
import { HashRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

import Courses from "./pages/Courses";
import Events from "./pages/Events";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
        </Routes>
      </HashRouter>

      <Footer></Footer>
      <Creator></Creator>
    </div>
  );
};

export default App;
