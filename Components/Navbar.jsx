import { useState } from "react"
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div>
      <nav>
        <h5 className="logo span " >GowthaM...</h5>
        <div className={`pages ${isOpen?"active":""}`} >
            <a href='#Home'onClick={()=>setIsOpen(false)} >Home</a>
            <a href='#About' onClick={()=>setIsOpen(false)}>About</a>
            <a href='#Projects' onClick={()=>setIsOpen(false)} >Projects</a>
            <a href='#Contact' onClick={()=>setIsOpen(false)} >Contact</a>
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
