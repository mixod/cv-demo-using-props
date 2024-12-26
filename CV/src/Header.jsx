/* eslint-disable react/prop-types */
import './header.css'


function Header(props) {
  return (
    <>
    <h2 className='header'>{props.title}</h2>

    </>
  )
}

export default Header