import { useState } from "react";
import boy from '../assets/boy.svg'
import girl from '../assets/girl.svg'

export default function Personlist() {
  const [data, setData] = useState([
    { id: 1, name: "Dreams", gender: "Male" },
    { id: 2, name: "Pleng", gender: "Female" },
    { id: 3, name: "Begle", gender: "Female" },
    { id: 4, name: "Jiw", gender: "Female" },
  ]);

  const [show, setShow] = useState(true);
  console.table(data);

  const myStyle = {
    color:"red"
  }
  return (
    <>
        <div style={myStyle}>Helloo</div>
      <h1>People : {data.length} pcs</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ul>
        {show &&
          data.map((element) => (
            <li key={element.id}>
              <img src={element.gender=="Male" ? boy : girl} width={50} height={50}/>
              <h2>{element.name}</h2>
            </li>
          ))}
      </ul>
    </>
  );
}
