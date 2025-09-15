import boy from '../assets/boy.svg'
import girl from '../assets/girl.svg'

export default function User({element , deleteUser}) {
    return (
        <>
            <li style={{borderStyle:'solid', borderColor:element.gender=="Male" ? 'blue' : 'violet'}}>
                <div className="left">
                    <img src={element.gender=="Male" ? boy : girl} width={50} height={50}/>
                    <p>{element.name}</p>
                </div>
              <div className="control">
                <button className='btnDel' onClick={()=> deleteUser(element.id)}>Delete</button>
              </div>
            </li>
        </>
    )
}