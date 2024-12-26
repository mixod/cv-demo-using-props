/* eslint-disable react/prop-types */

function Hobbies(props) {
  return (
    <div><br></br>
        <div className="Heading">{props.hobbies}</div>
        <ul>
            <li>Interact with people</li>
            <li>Travelling</li>
            <li>Listening Hollywood Songs</li>
        </ul>
    </div>
  )
}

export default Hobbies