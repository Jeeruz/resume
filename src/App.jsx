import { useState } from "react";
import Pictures from "./components/Picture";

const person = {
  name: "Jefferson Dela Cruz",
  age: "27",
  address: "2501 Unida St.Baclaran Parañaque,Metro Manila 1702",
  contactno: "09184002589",
  email: "jdelacruz.proacc@gmail.com",
  skills: ["SQL", "TSQL", "HTML", "Javascript", "PHP"],
  description:
    "Developer experienced in Applications programming professional with education and experience in SQL Programming. Offers reliable technical knowledge and readiness for challenging work.",
  picture_file_loc: "./src/assets/jeff_drawing.png",
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
      <Pictures picture_file_loc={person.picture_file_loc} />
    </div>
  );
}

export default App;
