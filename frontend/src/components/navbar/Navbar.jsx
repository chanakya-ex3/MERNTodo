import React from 'react'
import "./Navbar.css"
const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#"><b>TODO</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">SignUp</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">SignIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Log Out</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <img className="image-fluid user-png" src="https://cdn-icons-png.freepik.com/256/1077/1077114.png" alt="" />
          </a>
        </li>
         
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar
