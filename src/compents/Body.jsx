import React from 'react'
import picture1 from '.././asserts/picture1.JPG' 
import picture2 from '.././asserts/picture2.JPG'
import picture3 from '.././asserts/picture 3.JPG'
import picture4 from '.././asserts/picture 4.JPG'
import picture5 from '.././asserts/picture5.JPG'
import picture6 from '.././asserts/picture 6.JPG'
import picture7 from '.././asserts/picture 7.JPG'
import picture8 from '.././asserts/picture 8.JPG'
import picture9 from '.././asserts/picture 9.JPG'
import picture10 from '.././asserts/picture 10.JPG'
import picture11 from '.././asserts/picture 11.JPG'
import './Styled.css'

function Body() {
  return (
    <div className='bodycontainer'>
      <h1>SOME OF OUR TRAINING CONDUCTED IN SCHOOLS</h1>
      <div className='bodyimg'>
        <img src={picture1} alt="" />
        <img src={picture2} alt="" />
        <img src={picture3} alt="" />
        <img src={picture4} alt="" />
        <img src={picture5} alt="" />
        <img src={picture6} alt="" />
        <img src={picture7} alt="" />
        <img src={picture8} alt="" />

      </div>

    </div>
  )
}

export default Body