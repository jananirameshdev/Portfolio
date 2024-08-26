import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
function Nav() {
    return (
        <BrowserRouter>
            <header className="head">
                <img src="https://i.ibb.co/hMmT0m8/OIG4-transparent-removebg-preview-fotor-2024082602034.png" alt="logos" className="logo" />
                <ul className="navBar">
                    <Link to="/"><li>Home</li></Link>
                    <Link to='#project' smooth> <li>Project</li></Link>
                    <Link to="#about" smooth><li>About</li></Link>
                    <Link to="#contact" smooth><li>Contact</li></Link>
                </ul>
            </header>
        </BrowserRouter>
    )
}
export default Nav;