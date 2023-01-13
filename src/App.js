import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Signup from './Components/Signup'
import Home from './Components/SideBarComponent/Home'
import Ask from './Components/SideBarComponent/Ask'
import FindAthlete from './Components/SideBarComponent/FindAthlete'
import Acount from './Components/SideBarComponent/Accont';
import ChatRoom from './Components/SideBarComponent/ChatRoom';
import Map from './Components/Map';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/SignUp" element={<Signup/>} > SignUp </Route>
    <Route path="/Accont" element={<Acount/>} >Accont</Route>
    <Route path="/Ask" element={<Ask/>} > Ask </Route>
    <Route path="/" element={<Login/>} > Login </Route>
    <Route path="/Home" element={<Home/>} >Home</Route>
    <Route path="/FindAthlete" element={<FindAthlete/>} >FindAthlete</Route>
    <Route path="/ChatRoom" element={<ChatRoom/>} >ChatRoom</Route>
    <Route path="/map/:idUser" element={<Map/>} >Map</Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
