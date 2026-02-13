//-----------------Project images-------------------------
import Straegix1 from '../src/assets/Strategix1.png' 
import Straegix2 from '../src/assets/Strategix2.png' 
import Straegix3 from '../src/assets/Strategix3.png' 
import Straegix4 from '../src/assets/Strategix4.png' 
import Straegix6 from '../src/assets/Strategix6.png' 

import pf22 from '../src/assets/Portfolio22.png'
import pf23 from '../src/assets/Portfolio23.png'
import pf24 from '../src/assets/Portfolio24.png'

import Ecom1 from '../src/assets/ECommerce1.png'
import Ecom2 from '../src/assets/ECommerce2.png'
import Ecom from '../src/assets/ECommerce.png'
import Ecom4 from '../src/assets/ECommerce4.png'

import pf12 from '../src/assets/Portfolio12.png'
import pf13 from '../src/assets/Portfolio13.png'
import pf11 from '../src/assets/Portfolio11.png'

import miniProject1 from '../src/assets/Card1.png'
import miniProject2 from '../src/assets/Card2.png'
import miniProject3 from '../src/assets/crud.png'

const Projects = () => {
  
  return (
    <div className='container Projects pt-5'>
      <h4><span className='span'> My Latest Work</span></h4>
      <div className=" row row-cols-1 g-2 row-cols-md-3">
        <div id='myCarousel' className="carousel slide col" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-indicators">
            <button type='button' data-bs-target="#myCarousel" data-bs-slide-to="0" className='active' ></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Straegix1} className='w-100' alt="Portfoli21" />
            </div>
            <div className="carousel-item ">
              <img src={Straegix2} className='w-100 d-block' alt="Straegix" />
            </div>
            <div className="carousel-item">
              <img src={Straegix3} className='w-100 d-block' alt="Straegix" />
            </div>
            <div className="carousel-item">
              <img src={Straegix4} className=' w-100 d-block' alt="Straegix" />
            </div>
            <div className="carousel-item">
              <img src={Straegix6} className=' w-100 d-block' alt="Straegix" />
            </div>
          </div>
        </div>
        <div id='myCarousel2' className="carousel slide col" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-indicators">
            <button type='button' data-bs-target="#myCarousel2" data-bs-slide-to="0" className='active' ></button>
            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pf22} className='w-100' alt="Portfoli21" />
            </div>
            <div className="carousel-item ">
              <img src={pf23} className='w-100 d-block' alt="Portfoli21" />
            </div>
            <div className="carousel-item">
              <img src={pf24} className='w-100 d-block' alt="Portfoli21" />
            </div>
  
          </div>
        </div>
        <div id='myCarousel3' className="carousel slide col" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-indicators">
            <button type='button' data-bs-target="#myCarousel3" data-bs-slide-to="0" className='active' ></button>
            <button type="button" data-bs-target="#myCarousel3" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#myCarousel3" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#myCarousel3" data-bs-slide-to="3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Ecom1} className='w-100' alt="Portfoli21" />
            </div>
            <div className="carousel-item ">
              <img src={Ecom2} className='w-100 d-block' alt="Portfoli21" />
            </div>
            <div className="carousel-item">
              <img src={Ecom} className='w-100 d-block' alt="Portfoli21" />
            </div>
            <div className="carousel-item">
              <img src={Ecom4} className=' w-100 d-block' alt="Portfoli21" />
            </div>
          </div>
        </div>
        <div id='myCarousel4' className="carousel slide col" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-indicators">
            <button type='button' data-bs-target="#myCarousel4" data-bs-slide-to="0" className='active' ></button>
            <button type="button" data-bs-target="#myCarousel4" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#myCarousel4" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pf12} className='w-100' alt="Portfolio12" />
            </div>
            <div className="carousel-item ">
              <img src={pf13} className='w-100 d-block' alt="Portfolio13" />
            </div>
            <div className="carousel-item">
              <img src={pf11} className='w-100 d-block' alt="Portfolio11" />
            </div>
          </div>
        </div>
        <div id='myCarousel5' className="carousel slide col" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-indicators">
            <button type='button' data-bs-target="#myCarousel5" data-bs-slide-to="0" className='active' ></button>
            <button type="button" data-bs-target="#myCarousel5" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#myCarousel5" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={miniProject1} className='w-100' alt="Profile Card" />
            </div>
            <div className="carousel-item ">
              <img src={miniProject2} className='w-100 d-block' alt="Profile card code" />
            </div>
            <div className="carousel-item">
              <img src={miniProject3} className='w-100 d-block' alt="CRUD" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
