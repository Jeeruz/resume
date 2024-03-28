import { useState } from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Description from "./components/Description";

const person = {
  name: "Jefferson Dela Cruz",
  jobclass: "Programmer",
  bday: "Oct 21 1997",
  age: "27",
  address: "2501 Unida St.Baclaran Parañaque",
  contactno: "09184002589",
  email: "jdelacruz.proacc@gmail.com",
  skills: ["SQL", "TSQL", "HTML", "Javascript", "PHP"],
  description:
    '"Developer experienced in Applications programming professional with education and experience in SQL Programming. Offers reliable technical knowledge and readiness for challenging work."',
  picture_file_loc: "./images/jeffdrawing.png",
};

const experience = [
  { job_position: "", desc_1: "", desc_2: "", desc_3: "", desc_4: "" },
  { job_position: "", desc_1: "", desc_2: "", desc_3: "", desc_4: "" },
  { job_position: "", desc_1: "", desc_2: "", desc_3: "", desc_4: "" },
];

const education = [
  { education: "", desc_1: "", desc_2: "", desc_3: "", desc_4: "" },
  { education: "", desc_1: "", desc_2: "", desc_3: "", desc_4: "" },
  { education: "", desc_1: "", desc_2: "", desc_3: "", desc_4: "" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Page Container */}
      <div
        className="w3-container w3-content"
        style={{ maxWidth: "1400px", marginTop: "20px" }}
      >
        {/* The Grid */}
        <div className="w3-row">
          {/* Left Column */}
          <div className="w3-col m3">
            <Profile
              picture_file_loc={person.picture_file_loc}
              jobclass={person.jobclass}
              bday={person.bday}
              age={person.age}
              address={person.address}
            />
            <br />
            <Skills skills={person.skills} />
            <br />
          </div>
          {/* Middle Column */}
          <div className="w3-col m9">
            <Description description={person.description} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
