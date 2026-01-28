import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    
    <div className={`${styles['Footer-background']} text-center mt-5 py-4 `}>
<div className={`${styles['gap-footer']} container gap-5 d-flex justify-content-center  g-5 `}>
<div className=''>

<p className='fs-2 text-white'>Location</p>
  <p className='text-white'>2215 John Daniel Drive</p>
  <p className='text-white'>Clark, MO 65243</p>
</div>
<div className=''>
<p className='fs-2 text-white'>Around the Web</p>
</div>

<div className=''>
<p className='fs-2 text-white'>About Freelancer</p>
  <p className='text-white'>Freelance is a free to use, MIT licensed <br/>Bootstrap theme created by Start Bootstrap .</p>
</div>
</div>

    </div>
  )
}
