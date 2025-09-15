import './Addform.css'  
import { useState } from 'react'

export default function Addform() {
    const [name,setName] = useState("")
    const [gender,setGender] = useState("")
    return (
        <section className="container">
            <form action="" className='inputForm'>
                <label>Name of person</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <button type="submit" className="btnSave">Save</button>
            </form>
        </section>
    )
}