import Academic from "./Academic";
import Career from "./Career";
import Header from "./Header";
import Intro from "./Intro";

function App() {
  const title = "CURRICULUM VITAE";
  const introduction = {
    name: "Shyam Cole",
    address: "panauti-kavre",
    mobno: 9841256370,
    email: "ssssnnn123@gmail.com",
  };
  const career = " CAREER OBJECTIVES";
  const academic = "ACADEMIC DETAILS";

  return (
    <>
      <div>
        <Header title={title} />
      </div>
      <div>
        <Intro introduction={introduction} />
      </div>
      <br></br>
      <div className="line"></div>
      <br></br>
      <div>
        <Career career={career} />
        <p>
          Aim to be accosiated with progressive organization which offers an
          excellent atmosphere<br></br>  to prove myself by utilizing all
          technique knowledge into practice and profit myself with<br></br>  
          experience and valuale knowledge for the development and growth of
          organization.
        </p>
      </div>
      <div>
        <Academic academic={academic}/>
      </div>
    </>
  );
}

export default App;
