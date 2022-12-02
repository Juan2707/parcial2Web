import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Objects from "./components/Objects";
import Bandas from "./components/bandas";
import NavBar from "./components/NavBar";

function App2() {
 return (
   <div className="App2">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Bandas />} />
         <Route path="/bandas" element={<Bandas />} />
         <Route path="/objects/:objectId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App2;