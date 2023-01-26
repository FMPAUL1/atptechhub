import React from 'react'
import Aboutuss from '../compents/Aboutuss'
import Body from '../compents/Body'
import Footer from '../compents/Footer'
import Mission from '../compents/Mission'
import Navbar from '../compents/Navbar'
import Services from '../compents/Services'
import Slider from '../compents/Slider'

function Home() {
  return (
    <> 
    <Navbar/>
    <Slider/>
    <div className='pages'>
      {/* <Aboutuss/> */}
    <Services/>
    <Body/>
<Mission />
    </div>
    <Footer/>
    </>

  )
}

export default Home