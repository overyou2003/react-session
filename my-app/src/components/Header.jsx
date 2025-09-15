import "./Header.css"
function Header(props) {
    return(
        <nav>
            <h1>{props.title}</h1>
            <button className="btnLightDark">Light / Dark</button>
        </nav>
    )
}

export default Header