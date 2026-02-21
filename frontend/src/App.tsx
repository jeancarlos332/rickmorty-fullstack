import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from    "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

export default function App() {

 return (
  <BrowserRouter>
   <Navbar />
   
   <Toaster position="top-right" />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/character/:id" element={<Detail/>}/>
   </Routes>

  </BrowserRouter>
 );
}
