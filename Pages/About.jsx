
import Profile2 from '../src/assets/Profile2.jpg'
const About = () => {
  const AboutMe={
    Image2:Profile2,
    MyIntro1:["React Developer With Strong Foundations in Front-end Technologies ","I Design Responsive, User Friendly Interfaces,Solve Problem Efficiently and Continuous Learn New Tools to Enhance Web Development"],
  }
  return (
    <div className=" container">
      <div className="About d-flex align-items-center text-align-center row ">
        <div className="Image2 col-8 col-md-3 m-auto " >
          <img className='img img-fluid rounded' src={AboutMe.Image2} alt="Profile Picture" />
        </div>
        <div className="MyIntro col-12 col-md-9 py-3">
          <p>{AboutMe.MyIntro1[0]}</p>
          <p>{AboutMe.MyIntro1[1]}</p>
          <ul className='list-unstyled fw-semibold '>
            <li>HTML5 
              <div className="progress" >
                <div className="progress-bar " style={{width:"89%" }}></div>
              </div>
            </li>
            <li>CSS3
              <div className="progress">
                <div className="progress-bar" style={{width:"86%" }}></div>
              </div>
            </li>
            <li>BOOTSTRAP5
              <div className="progress">
                <div className="progress-bar" style={{width:"77%" }}></div>
              </div>
            </li>
            <li>JAVASCRIPT (ES6+) 
              <div className="progress">
                <div className="progress-bar" style={{width:"82%" }}></div>
              </div>
            </li>
            <li>REACT JS
              <div className="progress" >
                <div className="progress-bar" style={{width:"85%" }}></div>
              </div>
            </li>
            <li>VERSION CONTROL
              <div className="progress" >
                <div className="progress-bar" style={{width:"80%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="achivements d-flex row pt-3">
          <div className="achive col">
            <h4>2+</h4>
            <p className='fw-semibold'>YEARS OF EXPERIENCE</p>
          </div>
          <div className="achive col">
            <h4>15+</h4>
            <p className='fw-semibold'>PROJECTS COMPLETED</p>
          </div>
          <div className="achive col ">
            <h4>3+</h4>
            <p className='fw-semibold'>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
