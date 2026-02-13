import '../Pages/Pages.css'
import profilePic from '../src/assets/profile.jpg'
const Home = () => {
 
  return (
    <div className="container">
      <div className="Home">
        <div className="profileImg">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="info">
          <div className='UserName' >I'm <span className='span'>GOWTHAM THANGAVEL</span>, <br /> Frontend focused  <b> React Developer <br /> </b> Skilled in Modern Javascript, Responsive design and Creating Clean.Reusable and Maintainable UI Components</div>
        </div>
        <div className="HomeBtns">
          <button className='btn text-white ' ><a href="www.linkedin.com/in/gowthamthangavel">Connect With Me</a></button>
          <button className='btn text-white' onClick={()=>window.open("/GowthamThangavel.pdf","_blank")} >My Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Home
