import { Link } from 'react-router-dom';

export const Sidebar = () => {

    return(
        <div className="container-sidebar">
            <h2 className="h2-sidebar">SideBar</h2>
            <nav className="nav-sidebar">
                <ul className="ul-sidebar">
                    <li><Link to="/Site1">Enlace 1</Link></li>
                    <li><Link to="/Site2">Enlace 2</Link></li>
                    <li><Link to="/Site3">Enlace 3</Link></li>
                </ul>
            </nav>
        </div>
        );
    };