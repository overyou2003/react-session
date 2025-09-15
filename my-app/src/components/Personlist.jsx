import { useState } from "react";
import "./Personlist.css"
import User from "./User"; 

export default function Personlist(props) {
  const {data} = props

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
            <User key={element.id} element={element}/>
          ))}
      </ul>
    </div>
  );
}
