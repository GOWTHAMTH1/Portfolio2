
/*********************StyleSheet**********************/
import '../src/Global.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../Pages/Pages.css'

/*********************Components**********************/
import Home from '../Pages/Home'
import About from '../Pages/About'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <section className='section' id='Home' > <Home/> </section>           
    <section className='section' id='About' > <About/> </section>           
    <section className='section' id='Projects' > <Projects/> </section>           
    <section className='section' id='Contact' > <Contact/> </section>   
    <section className='footer' id='Footer' > <Footer/> </section>  
    </>
  )
}

export default App
