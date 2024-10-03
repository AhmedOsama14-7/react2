import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    
      <div className="links">
                <ul>
                        <li>  <NavLink to={'/'}>home</NavLink> </li>
                        <li>  <NavLink to={'/about'}>about</NavLink> </li>
                        <li>  <NavLink to={'/contact'}>contact</NavLink> </li>
                
                </ul>
            </div>
    
  )
}
