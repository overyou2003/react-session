import { useState } from "react";
import "./Personlist.css"
import User from "./User";


export default function Personlist({data , deleteUser , setTheme , theme }) {

  const [show, setShow] = useState(true);
  

  return (
    <div className={`container ${theme}`}>
        <div className="header">
            <h2>Our database have {data.length} peoples</h2>
            <button className="btnShowHide" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
      <ul>
        {show &&
          data.map((element) => (
            <User key={element.id} element={element} deleteUser={deleteUser}/>
          ))}
      </ul>
    </div>
  );
}
