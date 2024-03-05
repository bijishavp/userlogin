import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Header';
import './Dash.css'
function Dash() {
  const location = useLocation();
  const userEmail = new URLSearchParams(location.search).get('email');
  return (
    <div>
       <div className="wrapper">
      {/* Sidebar */}
      
    
      <nav id="sidebar">
        {/* You can customize the content of your sidebar here */}
       
        <div className="sidebar-header">
        <h4>Welcome  {userEmail}</h4>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="#Dasboard">Designs</a>
          </li>
          <li>
            <a href="#UserSection">Blogs</a>
          </li>
          
          {/* Add more sidebar items as needed */}
        </ul>
      </nav>

      {/* Page Content */}
      <div id="content">
       <Header/>

        <div className="container">
          <div className="row">
            {/* User Management Section */}
            <div className="col-lg-12">
              <div className="card bg-success">
                <div className="card-header">
                  <h4>My Activities</h4>
                </div>
                <div className="card-body">
                 

                </div>
              </div>
            </div>


            {/* Event Section */}
         
          </div>
        </div>
      </div>
      </div>
      </div>
    
  )
}

export default Dash