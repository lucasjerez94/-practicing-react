import {Sidebar} from './Sidebar';
import {SearchBar} from './Searchbar';

export const Maincontent = () => {
    return(
        <div className="container-maincontent">
            <Sidebar />
            <SearchBar />
        </div>
    );
};