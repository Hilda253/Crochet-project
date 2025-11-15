import Header from './components/Header.jsx'
import "./index.css"

import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Card from './components/Card.jsx'
import Product from './components/Product.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Navigation />
            <Hero />

            <div className='mx-auto w-full absolute-float bg-amber-100'>
              <Stats />
            </div>
            
            <About />
            <Features />
            <Card />
            <Product />
            <Gallery />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
          </>
        } />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;