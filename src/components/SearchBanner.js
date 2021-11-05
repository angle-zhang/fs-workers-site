import "./SearchBanner.css";
import {Link, useHistory} from 'react-router-dom';
import {BLS_GROUPS} from '../utils/Constants.js'
import {useEffect, useState} from "react";
//search tutorial: https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

function SearchBanner(props) { 
    const websiteTitle = props.small ? "Food System Occupations" : "Workers in the US Food System";
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');

    const onSubmit = e => {
        var newURL = history.location.pathname == "/occupations" ? "" : "/occupations";
        newURL = newURL + `?search=${searchQuery}` 
        history.push(newURL);
        e.preventDefault()
    };

    return ( 
        <div className="search-banner-container"> 
            <div className="search-banner-text-container">
                <h1 className="website-title">{websiteTitle}</h1> 
                {!props.small && <p>Search for individual food occupations</p>}
            </div>
            <form> 
                <div className="search-bar-container">
                        <input
                            className="search-bar"
                            placeholder="Search for an occupation"
                            name="search"
                            onInput={e => setSearchQuery(e.target.value)}
                            value={searchQuery}
                        ></input>
                        {/* create dropdown elements */}
                        <div className="blue-select">
                        <select id="category_1" name="category 1">
                            {BLS_GROUPS.map((group) => <option value={group}>{group}</option> )}
                        </select>
                        </div>  
                        {props.small && <Link className="transparent-button" to="/occupations">Reset</Link>}
                        <button className="dark-blue-button" name="name" value="value" type="submit" onClick={onSubmit}>Search</button>
                </div>
            </form>
            <br/> 
            {!props.small && <Link className="dark-blue-button" to="/occupations">Browse All Occupations</Link>}
        </div>
    )
}

export default SearchBanner;