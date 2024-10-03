import React from 'react'
import Menu from '../links/Links'

export default function Navbar() {
  return (
        <nav>
            <div className="logo">
                <h1>Logo</h1>
            </div>

            <Menu></Menu>

            <div className='btn'>
                <button>Hello</button>
            </div>
        </nav>
  )
}
