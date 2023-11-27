import { Sidebar } from './Sidebar';
import { SearchBar } from './Searchbar';
import { useState } from 'react';
import { Site1 } from '../MainContent/pages/Site1';
import { Site2 } from '../MainContent/pages/Site2';
import { Site3 } from '../MainContent/pages/Site3';


export const Maincontent = () => {

    const [category, setCategory] = useState('');

    return (
        <div className="container-maincontent">
            <Sidebar setCategory={setCategory} />
            {category === "site1" ? (<Site1 />) : category === "site2" ? (<Site2 />) : category === "site3" ? (<Site3 />) : null}
            <SearchBar />
        </div>
    );
};