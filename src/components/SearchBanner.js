import "./SearchBanner.css";
import {Link, useHistory} from 'react-router-dom';
import {BLS_GROUPS} from '../utils/Constants.js'
import {useState} from "react";
//search tutorial: https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

function SearchBanner(props) { 

    const { search } = window.location;
    const c = new URLSearchParams(search).get('category');
    const q = new URLSearchParams(search).get('search');

    const websiteTitle = props.small ? "Food System Occupations" : "Workers in the US Food System";
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState(q);
    const [selectedOpt, setSelectedOpt] = useState(c);

    const onSubmit = e => {
        var newURL = history.location.pathname === "/occupations" ? "" : "/occupations";
        newURL = `${newURL}?search=${searchQuery}&category=${selectedOpt}`;
        history.push(newURL);
        e.preventDefault()
    };

    const onChange = e => { 
        setSelectedOpt(e.target.value);
        console.log(e.target.value, "selected opt");
    }

    const onReset = () => { 
        setSelectedOpt("");
        setSearchQuery("");
    }

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
                        <select id="category_1" onChange={onChange} value={selectedOpt} name="category 1">
                            <option value="">All categories</option>
                            {BLS_GROUPS.map((group) => <option value={group}>{group}</option> )}
                        </select>
                        </div>  
                        {props.small && <Link className="transparent-button" to="/occupations" onClick={onReset} >Reset</Link>}
                        <button className="dark-blue-button" name="name" value="value" type="submit" onClick={onSubmit}>Search</button>
                </div>
            </form>
            <br/> 
            {!props.small && <Link className="dark-blue-button" to="/occupations">Browse All Occupations</Link>}
        </div>
    )
}

export default SearchBanner;