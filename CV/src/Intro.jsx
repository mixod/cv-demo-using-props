/* eslint-disable react/prop-types */


function Intro(props) {
    
    const {name, address, mobno, email } = props.introduction;
  return (
    <div>
        {name}<br></br>
        {address}<br></br>
        {mobno}<br></br>
        {email}<br></br>
    </div>
  )
}

export default Intro