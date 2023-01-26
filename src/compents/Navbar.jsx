
import './Styled.css'
import Logo from '../asserts/logo.jpg'
import styled from 'styled-components'

function Navbar() {
  return (
    <div className='container'>
        <div className="bar">
            
<div className="left">
<img src={Logo} alt="" />
</div>
<div className="center">
    <h1>ATPtechhub</h1>
</div>
<div className="right">
<ul>
    <li><a href="/"> HOME</a></li>
    <li><a href="#"> ABOUT US</a></li>
    <li><a href="#"> PROGRAMS</a></li>
    <li><a href="#"> CONTACT US</a></li>

</ul>
</div>

        </div>

    </div>

  )

}

export default Navbar