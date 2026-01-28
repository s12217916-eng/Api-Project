import React from 'react'
import styles from './Hero.module.css'
import personImg from '../../assets/image/person.svg'
export default function Hero() {
  return (
    <div className={`${styles['Hero-color']} text-center mt-5`}>
      <img src={personImg} alt="person" className='w-25 py-5 mt-5'/>
    <h1 className={`${styles['hero-font']} text-white mb-5`}>Start Bootstrap</h1>
  <p className='text-white fs-3 py-4'>Graphic Artist - Web Designer - Illustrator</p>
  
  </div>
  )
}
