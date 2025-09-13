import { useState } from "react";
import boy from '../assets/boy.svg'
import girl from '../assets/girl.svg'
import "./Personlist.css"

export default function Personlist() {
  const [data, setData] = useState([
    { id: 1, name: "Dreams", gender: "Male" },
    { id: 2, name: "Pleng", gender: "Female" },
    { id: 3, name: "Begle", gender: "Female" },
    { id: 4, name: "Jiw", gender: "Female" },
  ]);

  const [show, setShow] = useState(true);
  console.table(data);

  return (
    <div className="container">
        <div className="header">
            <h2>Our database have {data.length} peoples</h2>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
      <ul>
        {show &&
          data.map((element) => (
            <li key={element.id}>
                <div className="left">
                    <img src={element.gender=="Male" ? boy : girl} width={50} height={50}/>
                    <p>{element.name}</p>
                </div>
              <div className="control">
                <button>Delete</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
