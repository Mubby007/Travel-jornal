import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Hero from './Hero'
import data from './data'
import './App.css'

function App() {

  const Card = data.map((item) => {
    return ( <Hero key= {item.key}
                item= {item} /> )
  })

  
 return (
  <div>
    <Header/>

    <section className='Hero'>

    {Card}

    </section>

   
    
  </div>
 )
}

export default App
