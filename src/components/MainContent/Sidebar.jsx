export const Sidebar = ({setCategory}) => {
    return(
        <div className="container-sidebar">
            <h2 className="h2-sidebar">SideBar</h2>
            <nav className="nav-sidebar">
                <ul className="ul-sidebar">
                    <li onClick={()=> setCategory("site1")}>Enlace 1</li>
                    <li onClick={()=> setCategory("site2")}>Enlace 2</li>
                    <li onClick={()=> setCategory("site3")}>Enlace 3</li>
                </ul>
            </nav>
        </div>
        );
    };
    