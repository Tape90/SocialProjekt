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
import PublicRequestOffer from './components/RequestOffer/PublicRequestOffer'
import Reset from './components/Login/Reset'
import Code from './components/Login/Code'
import useUser from './customHooks/useUser'
import ForgotPassword from './components/Login/ForgotPassword'
import { useState, useEffect } from 'react'

//BrowserRouter
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

//CSS
import '../scss/App.css'

function App() {

  const [offer, setOffer, getOffer] = useOffer();
  const [request, setRequest, getRequest] = useRequest();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [resetNumber, setResetNumber] = useState(0);
  const [emailToken, setEmailToken] = useState(false);

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
      <GoogleOAuthProvider clientId="628197608405-jcl088v35he0bk3gs4v6v3a74k503lt1.apps.googleusercontent.com">
      <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Routes>
        <Route path='/Login' element={<Login handleLogin={handleLogin}/>}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Offer' element={isLoggedIn ? <RequestOffer offer={offer} setOffer={setOffer} request={request} setRequest={setRequest} getOffer={getOffer} getRequest={getRequest} /> : <Navigate to="/Login" replace/>}></Route>
        <Route path='/Register' element={<Register />} />
        <Route path='/Public' element={<PublicProfile />} />
        <Route path='/' element={isLoggedIn ? <FeedCard offer={offer} setOffer={setOffer} request={request} setRequest={setRequest} getOffer={getOffer} getRequest={getRequest} handleLogout={handleLogout}/> : <Navigate to="/Login" replace />}></Route>
        <Route path='/catastrophe/:id' element={<PublicRequestOffer offer={offer} request={request} getOffer={getOffer} getRequest={getRequest}/> }/> 
        <Route path='/Forgot' element={<ForgotPassword setResetNumber={setResetNumber} setEmailToken={setEmailToken} resetNumber={resetNumber} />}></Route>
        <Route path='/Reset' element={emailToken ? <Reset setEmailToken={setEmailToken}/> : <Navigate to="/Login" replace />}></Route>
        <Route path='/Code' element={<Code resetNumber={resetNumber}/>}/>
        </Routes>
      <Footer/>
      </Router>
      </GoogleOAuthProvider>
    </div>
  )
}

export default App
