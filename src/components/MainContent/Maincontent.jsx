import {Sidebar} from '../Sidebar/Sidebar';
import {SearchBar} from '../searchbar/Searchbar';

export const Maincontent = () => {
    return(
        <div className="container-maincontent">
            <Sidebar />
            <SearchBar />
        </div>
    );
};