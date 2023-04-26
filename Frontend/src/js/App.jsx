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

//BrowserRouter
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//CSS
import '../scss/App.css'

function App() {

  const [offer, setOffer] = useOffer();
  const [request, setRequest] = useRequest();

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<FeedCard offer={offer} setOffer={setOffer} request={request} setRequest={setRequest}/>}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Offer' element={<RequestOffer offer={offer} setOffer={setOffer} request={request} setRequest={setRequest}/>}></Route>
        <Route path='/Register' element={<Register />} />
        <Route path='/Public' element={<PublicProfile />} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
