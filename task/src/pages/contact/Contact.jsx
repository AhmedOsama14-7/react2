import React from 'react'
import '../../styles/index.css'
import ContactTypes from '../../components/contacttypes/ContactTypes'
import Navbar from '../../components/navbar/Navbar'

import '../../styles/index.css'
import Menu from '../../components/menuBox/Menu'
import Output from '../../components/output/Output'
export default function Contact() {
  return (
    <section className='contact_page'>
        <Menu></Menu>
        <Output></Output>
    </section>
  )
}
