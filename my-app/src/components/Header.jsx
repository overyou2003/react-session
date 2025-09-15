import "./Header.css"
function Header({title , theme , setTheme}) {

    function toggleTheme() {
        if(theme==="light") setTheme("dark")
        else setTheme("light")
    }
    return(
        <nav>
            <h1>{title}</h1>
            <button className="btnLightDark" onClick={toggleTheme}>{theme==="light" ? "Dark" : "Light"} </button>
        </nav>
    )
}

export default Header