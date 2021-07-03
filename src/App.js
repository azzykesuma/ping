import React,{useState} from 'react';
import './App.css';
import logo from './images/logo.svg'
import heroImg from './images/illustration-dashboard.png'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'

function App() {
  // form function
  const [email,setEmail] = useState('')
  const [error,setError] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const submit = e => {
    e.preventDefault()
    if(email === '') {
      setError('Email Cannot be empty')
    } else if(!email.includes('@')) {
      setError('Please provide a valid email adress')
    } else {
      alert(`email has been submitted`)
    }
  }

  return (
    <div className='mainContainer'>
      <div className='headerContainer'>
        <img src={logo} alt='logo' />
        <h1>We are launching <span>soon!</span></h1>
        <p>Subscribe and get notified</p>
      </div>
        <form onSubmit={submit}>
          <input type='text' 
          placeholder='Your email adress...'
          value={email}
          onChange={handleEmail}
          />
          <p className='error'><em>{error}</em></p>
          <button type='submit'>Notify Me</button>
        </form>
        
      <img src={heroImg} className='heroImage' alt='illustration dashboard' />
      <div className='socmedContainer'>
        <FaFacebookF className='media'/>
        <FaTwitter className='media'/>
        <FaInstagram className='media'/>
      </div>
      <small>© Copyright Ping. All rights reserved.</small>
    </div>
  );
}

export default App;
