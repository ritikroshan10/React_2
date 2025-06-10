import { Link } from "react-router-dom"
import "../Common/Header.css"
const Header = () => {
    return (
        <>
            <h1>This is a header part...</h1>
            <ul>
                <li><Link to={'/'}>Home</Link> </li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/course'}>Course</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
        </>
    )
}

export default Header