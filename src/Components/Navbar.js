import React,{ useState }  from 'react'
import { Link } from 'react-router-dom'

 const Navbar=()=>{
 
  
    return (
      <div>
        <nav className="navbar fixed-top  navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-warning  rounded " >
    <a className="navbar-brand" href="#" style={{ fontSize: '23px',fontWeight:700, fontFamily:'arial',color:'white'}}>NewsApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/home"style={{ fontSize: '18px' }}>Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active " href="/business"style={{ fontSize: '18px' }}>Buisness</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/sports"style={{ fontSize: '18px' }}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/entertainment"style={{ fontSize: '18px' }}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/health"style={{ fontSize: '18px' }}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/science"style={{ fontSize: '18px' }}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/technology"style={{ fontSize: '18px' }}>Technology</a>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>
      </div>
    )
  
}
export default Navbar
