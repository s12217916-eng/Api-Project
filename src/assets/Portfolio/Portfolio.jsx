import React from 'react'
import styles from './Portfolio.module.css'
import img1 from '../image/1.png'
import img2 from '../image/2.png'
import img3 from '../image/3.png'
import img4 from '../image/4.png'
import img5 from '../image/5.png'
import img6 from '../image/6.png'
export default function Portfolio() {
  return (
    <div className={`${styles['main-Color']} text-center mt-5 py-4 mb-1`} >
      <h2 className={`${styles['main-Color']} text-center fs-1`}>Portfolio</h2>
      <div className=''>
        <div className='d-flex justify-content-center align-items-center flex-wrap w-100 container g-4 py-2'>
  <div className="card w-25 me-4 mb-5" style={{width: '18rem'}}>
    <img src={img1} className="card-img-top card-width" alt="..." /></div>
  <div className="card w-25 me-4 mb-5" style={{width: '18rem'}}>
    <img src={img2} className="card-img-top card-width" alt="..." /></div>
  <div className="card w-25 me-4 mb-5" style={{width: '18rem'}}>
    <img src={img3} className="card-img-top card-width" alt="..." /></div>
  <div className="card w-25 me-4 mb-5" style={{width: '18rem'}}>
    <img src={img4} className="card-img-top card-width" alt="..." /></div>
  <div className="card w-25 me-4 mb-5" style={{width: '18rem'}}>
    <img src={img5} className="card-img-top card-width" alt="..." /></div>
  <div className="card w-25 me-4 mb-5" style={{width: '18rem'}}>
    <img src={img6} className="card-img-top card-width" alt="..." /></div>
</div>

      </div>
    </div>
  )
}
