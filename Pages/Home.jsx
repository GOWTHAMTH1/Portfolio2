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
          <div className='UserName' >I'm <span className='span'>GOWTHAM THANGAVEL</span>, <br /> React Developer based in India</div>
          <p>Im a React Developer From Tamilnadu,with 2 years of Experience</p>
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
