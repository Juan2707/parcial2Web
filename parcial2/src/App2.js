import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Objects from "./components/Objects";
import NavBar from "./components/NavBar";

function App2() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Objects />} />
         <Route path="/objects" element={<Objects />} />
         <Route path="/objects/:objectId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App2;