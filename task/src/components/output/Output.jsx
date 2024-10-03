import React from 'react'
import '../../styles/index.css'
import { Outlet } from 'react-router-dom'
export default function Output() {
  return (
    <div className='output_field'>
      <Outlet></Outlet>
    </div>
  )
}
