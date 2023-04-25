//Components
import Headline from './components/Headers/Headline'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

//CSS
import '../scss/App.css'
import FeedCard from './components/StartSite/FeedCards'



function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Headline text="Kat-Net-App"/>
      <FeedCard />
      <Footer/>
    </div>
  )
}

export default App
