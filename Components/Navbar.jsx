import { useState } from "react"
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div>
      <nav>
        <h5 className="logo span " >GowthaM...</h5>
        <div className={`pages ${isOpen?"active":""}`} >
            <a href='#Home' >Home</a>
            <a href='#About'>About</a>
            <a href='#Projects' >Projects</a>
            <a href='#Contact' >Contact</a>
        </div>
        <div className="Hamburger" onClick={()=>setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
