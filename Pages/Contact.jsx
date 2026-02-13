import { useState } from "react"
/*-----------icons------------*/
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  const [Data,setData]=useState({
    Name:"",
    Email:"",
    Message:""
  })
  const [Result,setResult]=useState("")
  const HandleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    console.log(name,value);
    setData({...Data,[name]:value})
  }

const HandleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b7659792-a1dd-4185-9f55-8929d55b7ca9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <div className="conatainer pt-3">
      <div className="contact row row-cols-1 row-cols-md-2 p-3">
        <div className="col">
        {/* --------------------Contact Address----------------------- */}
          <h4><span className="span">Let's Talk</span> </h4>
          <p>I'm Currently available to take on new projects , So feel free to send message about anything that you want me to work on.You can contact on anytime.</p>
          <a href="mailto:gowthamthangavel1@gmail.com"><MdEmail/> gowthamthangavel1@gmail.com</a><br />
          <a href="https://www.linkedin.com/in/gowthamthangavel1" target="_blank "><FaLinkedin/> LinkedIn</a><br />
          <a href="https://github.com/GOWTHAMTH1"><FaGithub/> Github</a><br />
          <p><IoCall/>6369915781</p>
          <p><IoLocationSharp/>Salem-636306,TamilNadu,India</p>
        </div>
        {/* --------------------Contact Form----------------------- */}
        <div className="col">
          <form action="" onSubmit={HandleSubmit}>
            <div className="ip">
              <label htmlFor="Name">Your Name</label>
              <input type="text" name="Name" value={Data.Name} onChange={HandleChange} id="Name" placeholder="Enter Your Name" className="form-control danger" />
            </div>
            <div className="ip">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="Email" value={Data.Email} onChange={HandleChange} id="email" placeholder="Enter Your Email" className="form-control" />
            </div>
            <div className="ip">
              <label htmlFor="Message">Message</label>
              <textarea name="Message"  value={Data.Message} onChange={HandleChange} id="Message" rows={5}  className="form-control" placeholder="Enter Your Message"></textarea>
            </div>
            <input type="submit" className="btn text-white" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
