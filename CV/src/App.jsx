import Academic from "./Academic";
import Career from "./Career";
import Computer from "./Computer";
import Header from "./Header";
import Hobbies from "./Hobbies";
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
  const academic = {
    college:"R.V.S(B.S.CITY)",
    university: "Binova University Hazaribagh",
    division:"2nd",
    school: "Aananda College Hazaribagh(jharkhand)",
    board: "J.A.C",
    School: "Ram Ratan High School(jharkhand)",
    
  
  };
  const comp ={
    officeAutomation:" Microsoft Office 2007,2003 ",
    technicalKnowledge:"Tally, Typing",
  };
  const hobbies = "Hobbies & Intrest";

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
      <div>
        <Computer compu={comp}/>
      </div>
      <div>
        <Hobbies hobbies={hobbies}/>
      </div>
    </>
  );
}

export default App;
