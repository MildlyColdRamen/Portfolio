import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar(){
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact 
          activeClassName="text-white"
          className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-purple-800 text-4xl font-bold cursive tracking-widest">
            Austin
          </NavLink>
          <NavLink to="/post" 
          activeClassName="text-red-100 bg-purple-700"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-purple-800">
            Blog Posts
          </NavLink >
          <NavLink to="/project" 
          activeClassName="text-purple-100 bg-purple-700"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-purple-800">
            Projects
          </NavLink>
          <NavLink to="/about" 
          className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-purple-800"
          activeClassName="text-purple-100 bg-purple-700">
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.facebook.com/braahhhh" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }} />
          <SocialIcon url="https://www.instagram.com/mildlycoldramen/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }} />
          <SocialIcon url="https://www.linkedin.com/in/austin-bartram-52a08b1b7/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }} />
        </div>
      </div>
    </header>
  )
}
