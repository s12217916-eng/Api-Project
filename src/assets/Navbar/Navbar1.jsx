import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Navbar1.module.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function Navbar1() {
  return (
    <>
    <div className='position-fixed w-100 top-0 z-1'>
    <Navbar bg="dark" data-bs-theme="dark" className={styles['Nav-Color']}>
        <Container>
          <Navbar.Brand href="#home" className='py-2 ms-5 fs-1'>Start Bootstrap
</Navbar.Brand>
          <Nav className="gap-4">
            <Nav.Link href="#home" className='fs-4 text-white'>Portfolio</Nav.Link>
            <Nav.Link href="#features"  className='fs-4 text-white'>About</Nav.Link>
            <Nav.Link href="#pricing"  className='fs-4 text-white'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>

      
      </>
  )
}
