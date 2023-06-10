import Sginup from './componet/Sginup'
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Cards1 from './componet/cards'
import Allcards from './componet/allcards'
import CardsLogin from './componet/cards'
import { Link } from 'react-router-dom'
import Nav1 from './componet/Nav1'
import { useState } from 'react'
//import { useState } from 'react'
function App() {
 //const linkText =()=>{
    //document.getElementById("link").innerHTML= "login" 
   
// }
  const [condition, setCondition] = useState(true);

  const element = (
    <div>
      Logout
    </div>
  );
  
  const handleChange = () => {
    //عشان اذا ضغط عليه تتحول الحاله ومعد يظهر العنصر
   setCondition(!condition);
  };
  

  
  return (
    <>
    <Nav1/>
    <Link to="/login" id="link"onClick={handleChange} >{condition && element}</Link> 
   <Routes>
    <Route path="/" element={<Sginup/>}/>
    <Route path="/cards" element={<Cards1/>}/>
    <Route path="/allcards" element={<Allcards/>}/>
    <Route path="/login" element={<CardsLogin/>}/>
    </Routes>  
 
    </>
  )
}

export default App
