import React, { useState } from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  const [active , setactive ] = useState('')
  return (
    <div className={`w-full md:py-3 flex fixed ${styles.bg} rounded-b-md md:px-5`}>
      <div className='flex flex-1'>
        <img src='/src/img/logo.svg' alt='Falcon Science Academy' height={60} width={70} className="pr-3"/>
        <p className='text-white font-bold'>Falcon Academy Of<br/> Science</p>
      </div>
      <div className='flex-1'>
        <ul className='flex'>
          <li>Home</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar