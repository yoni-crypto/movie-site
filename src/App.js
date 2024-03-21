import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Action from "./components/Geners/Action/Action";
import Animation from "./components/Geners/Animation/Animation";
import Horor from "./components/Geners/Horor/Horor";
import First from "./pages/First/First.js";
import Leftbar from "./components/Leftbar/Leftbar.js";
import Rightbar from "./components/Rightbar/Rightbar.js";
import Login from "./components/Login/Login.js";
import Newhome from "./components/Newhome/Newhome.js";



function App() {
  return (
    <div className="App">
     

      <Routes>
        <Route path="" element={<First/>} />
        <Route path='/genre/action/*' element={<Action />} />
        <Route path='/genre/animation' element={<Animation />} />
        <Route path='genre/horor' element={<Horor />} />
        <Route path="/Home" element={<Newhome/>}/>
        <Route path="/Movies" Component={Leftbar}/>
        <Route path="/tvshows" element={<Rightbar/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
