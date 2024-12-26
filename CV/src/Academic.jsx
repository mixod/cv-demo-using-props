/* eslint-disable react/prop-types */

function Academic(props) {
  const { college, university, division, school, board, School } =
    props.academic;
  return (
    <>
      <div className="Heading">ACADEMIC DETAILS</div>
      <br></br>
      <div>
        <b>B.COM (ACCOUNT HONS)</b>
      </div>
      <div>
        College : {college}
        <br></br>
        Universiy : {university}
        <br></br>
        Division : {division}
        <br></br>
      </div>
      <br></br>
      <div>
        <b>INTERMIDATE</b>
      </div>
      <div>
        School: {school}
        <br></br>
        Board: {board}
        <br></br>
        Division : {division}
        <br></br>
      </div>
      <br></br>
      <div>
        <b>Secondary School Certificate (SSC)</b>
      </div>
      <div>
        School:{School}
        <br></br>
        Board: {board}
        <br></br>
        Division : {division}
        <br></br>
      </div>
    </>
  );
}

export default Academic;
