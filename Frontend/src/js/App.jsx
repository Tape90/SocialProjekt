//Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

//BrowserRouter
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//CSS
import '../scss/App.css'
import FeedCard from './components/StartSite/FeedCards'
import RequestOffer from './components/RequestOffer/RequestOffer';



function App() {


  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<FeedCard />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Offer' element={<RequestOffer />}></Route>
        </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
