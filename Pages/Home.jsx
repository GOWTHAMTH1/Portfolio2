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
          <button className='btn text-white ' >Connect With Me</button>
          <button className='btn text-white' >My Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Home
