import { Link } from  'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white">
                <Link className="navbar-brand" to="/GroundDB/dashboard">
                    GroundDB
                </Link>
            </nav>
        </div>
    )
}

export default Navbar