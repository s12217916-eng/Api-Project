import React from 'react'
import styles from './Contact .module.css'
export default function Contact () {
  return (
    <div className="mt-5 w-50 container">
      
      <h2 className={`${styles['Contact-color']} text-center fs-1 mt-4`}>Contact Me</h2>
      <div className=''>
        <form className='gap-4 text-center'>
     <div>
  <label htmlFor="inputPassword5" className="form-label mt-4 text-secondary">Full Name</label>
  <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
  <label htmlFor="inputPassword5" className="form-label mt-4 text-secondary">Email Addres</label>
  <input type="email" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
  <label htmlFor="inputPassword5" className="form-label mt-4 text-secondary">Phone Number</label>
  <input type="number" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
  <label htmlFor="inputPassword5" className="form-label mt-4 text-secondary">Message</label>
  <input type="text" id="inputPassword5" className="form-control mb-5" aria-describedby="passwordHelpBlock" />
  <button type="button" className="btn btn-primary">Primary</button>
</div>

        </form>
      </div>




       </div>
  )
}