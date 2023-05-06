//Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import FeedCard from './components/StartSite/FeedCards'
import RequestOffer from './components/RequestOffer/RequestOffer'
import Register from './components/Login/Register'
import PublicProfile from './components/Profile/PublicProfile'
import useOffer from './customHooks/useOffer'
import useRequest from './customHooks/useRequest'
import useUser from './customHooks/useUser'
import { useState, useEffect } from 'react'

//BrowserRouter
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

//CSS
import '../scss/App.css'

function App() {

  const [offer, setOffer, getOffer] = useOffer();
  const [request, setRequest, getRequest] = useRequest();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("token exist")
      setisLoggedIn(true);
    }
  },[]);

  const handleLogin = () => {
    setisLoggedIn(true);
  };
  
  const handleLogout = () => {
    setisLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <Router>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path='/Login' element={<Login handleLogin={handleLogin}/>}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Offer' element={isLoggedIn ? <RequestOffer offer={offer} setOffer={setOffer} request={request} setRequest={setRequest} getOffer={getOffer} getRequest={getRequest} /> : <Navigate to="/Login" replace/>}></Route>
        <Route path='/Register' element={<Register />} />
        <Route path='/Public' element={<PublicProfile />} />
        <Route path='/' element={isLoggedIn ? <FeedCard offer={offer} setOffer={setOffer} request={request} setRequest={setRequest} getOffer={getOffer} getRequest={getRequest} handleLogout={handleLogout}/> : <Navigate to="/Login" replace />}></Route>
        </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
