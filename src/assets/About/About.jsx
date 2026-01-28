import React from 'react'
import styles from './About.module.css'
export default function About() {
  return (
    <div className={`${styles['About-color']} About-color text-center p-5 mb-5`}>
      <h1 className='text-white fs-1 mt-5 mb-5'>About</h1>
      <div className='container-fluid w-75 mt-4 mb-5 d-flex align-items-center gap-4 justify-content-start justify-content-center '>
<p className='text-white fs-5 w-50'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
<p className='text-white fs-5 w-50'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>

      </div>

<button type="button" className="btn btn-outline-light fs-2">Free Download</button>







    </div>
  )
}
