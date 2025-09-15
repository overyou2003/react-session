import "./Header.css"
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Header({title , theme , setTheme}) {

    function toggleTheme() {
        if(theme==="light") setTheme("dark")
        else setTheme("light")
    }
    return(
        <nav className={`navbar ${theme}`}>
            <h1>{title}</h1>
            <span onClick={toggleTheme}>
                {theme==="light" ? <MdLightMode size={25} className="icon-light"/> : <MdDarkMode size={25} className="icon-dark"/>}
            </span>
        </nav>
    )
}

export default Header