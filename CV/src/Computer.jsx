/* eslint-disable react/prop-types */

function Computer(props) {
    const {officeAutomation,technicalKnowledge} = props.compu;
  return (
    <><br></br>
    <div className="Heading"><b>COMPUTER PROFICIENCY:</b></div><br></br>
    <div>
    Office Automation : {officeAutomation}<br></br>
    Technical Knowledge: {technicalKnowledge} <br></br>
    </div>
    
    </>
  )
}

export default Computer